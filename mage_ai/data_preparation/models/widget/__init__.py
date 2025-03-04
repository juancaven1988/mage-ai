import numpy as np
import os
import pandas as pd
from typing import Dict, List

from .charts import (
    MAX_BUCKETS,
    TimeInterval,
    build_histogram_data,
    build_time_series_buckets,
)
from .constants import (
    ChartType,
    VARIABLE_NAMES_BY_CHART_TYPE,
    VARIABLE_NAME_BUCKETS,
    VARIABLE_NAME_GROUP_BY,
    VARIABLE_NAME_INDEX,
    VARIABLE_NAME_LIMIT,
    VARIABLE_NAME_METRICS,
    VARIABLE_NAME_TIME_INTERVAL,
    VARIABLE_NAME_X,
    VARIABLE_NAME_Y,
)
from .utils import (
    build_x_y,
    convert_to_list,
    encode_values_in_list,
)
from mage_ai.data_preparation.models.block import Block
from mage_ai.data_preparation.models.constants import (
    DATAFRAME_SAMPLE_COUNT_PREVIEW,
)
from mage_ai.shared.hash import merge_dict


class Widget(Block):
    @classmethod
    def create(
        self,
        name,
        block_type,
        repo_path,
        **kwargs,
    ):
        return super().create(
            name,
            block_type,
            repo_path,
            widget=True,
            **kwargs,
        )

    @property
    def output_variable_names(self):
        chart_type = (self.configuration or {}).get('chart_type')
        var_names = VARIABLE_NAMES_BY_CHART_TYPE.get(chart_type, [])
        return [
            (var_name_orig, self.configuration.get(var_name_orig)) for var_name_orig in var_names
        ]

    def delete(self, commit=True):
        super().delete(widget=True, commit=commit)

    def get_variables_from_code_execution(self, results):
        data = {}
        for var_name_orig, var_name in self.output_variable_names:
            data[var_name_orig] = results.get(var_name)

        return data

    def post_process_variables(
        self,
        variables,
        chart_type: str = None,
        code: str = None,
        group_by_columns: List[str] = None,
        metrics: List[str] = None,
        results: Dict = {},
        upstream_block_uuids: List[str] = [],
        x_values: List = None,
        y_values: List = None,
    ):
        data = variables.copy()
        dfs = []

        for key in upstream_block_uuids:
            if key in results.keys():
                dfs.append(results[key])

        should_use_no_code = x_values is None and y_values is None and \
            (group_by_columns or metrics)

        if x_values is not None and y_values is not None:
            variables[VARIABLE_NAME_X] = x_values
            variables[VARIABLE_NAME_Y] = y_values

        if ChartType.BAR_CHART == chart_type:
            if should_use_no_code:
                df = dfs[0]
                data = build_x_y(df, group_by_columns, metrics)
            else:
                data[VARIABLE_NAME_X] = encode_values_in_list(
                    convert_to_list(variables[VARIABLE_NAME_X])
                )
                y_values = encode_values_in_list(convert_to_list(variables[VARIABLE_NAME_Y]))
                data[VARIABLE_NAME_Y] = [y_values]
        elif ChartType.HISTOGRAM == chart_type:
            arr = []

            if should_use_no_code:
                df = dfs[0]
                arr = df[group_by_columns[0]]
            else:
                for var_name_orig, var_name in self.output_variable_names:
                    arr = variables[var_name_orig]
            if type(arr) is pd.Series:
                values = arr[arr.notna()].tolist()
            else:
                values = [v for v in arr if v is not None and not np.isnan(v)]
            data = build_histogram_data(
                values,
                int(self.configuration.get(VARIABLE_NAME_BUCKETS, MAX_BUCKETS)),
            )
        elif ChartType.LINE_CHART == chart_type:
            if should_use_no_code:
                df = dfs[0]
                data = build_x_y(df, group_by_columns, metrics)
            else:
                for var_name_orig, var_name in self.output_variable_names:
                    data.update(
                        {
                            var_name_orig: encode_values_in_list(
                                convert_to_list(variables[var_name_orig])
                            ),
                        }
                    )
        elif ChartType.PIE_CHART == chart_type:
            arr1 = []
            data_key = VARIABLE_NAME_X

            if should_use_no_code:
                df = dfs[0]
                arr1 = df[group_by_columns[0]]
            else:
                for var_name_orig, var_name in self.output_variable_names:
                    arr1 = variables[var_name_orig]
                    data_key = var_name_orig
            if type(arr1) is pd.Series:
                values = arr1[arr1.notna()]
                value_counts = values.value_counts().to_dict()
            else:
                values = [v for v in arr1 if v is not None]
                value_counts = {}
                for key in values:
                    if not value_counts.get(key):
                        value_counts[key] = 0
                    value_counts[key] += 1

            buckets = int(self.configuration.get(VARIABLE_NAME_BUCKETS, MAX_BUCKETS))
            arr = sorted(
                list(zip(value_counts.values(), value_counts.keys())),
                reverse=True,
            )[:buckets]
            data[data_key] = {k: v for v, k in arr}
        elif ChartType.TABLE == chart_type:
            if should_use_no_code:
                df = dfs[0]
                data[VARIABLE_NAME_X] = group_by_columns
                data[VARIABLE_NAME_Y] = df[group_by_columns].to_numpy()
            else:
                for var_name_orig, var_name in self.output_variable_names:
                    arr = variables.get(var_name_orig, None)

                    if arr is not None:
                        limit = len(arr)
                        if var_name_orig in [VARIABLE_NAME_Y, VARIABLE_NAME_INDEX]:
                            limit = int(
                                self.configuration.get(
                                    VARIABLE_NAME_LIMIT,
                                    DATAFRAME_SAMPLE_COUNT_PREVIEW,
                                )
                            )

                        data.update(
                            {
                                var_name_orig: encode_values_in_list(
                                    convert_to_list(arr, limit=limit)
                                ),
                            }
                        )

        elif chart_type in [ChartType.TIME_SERIES_BAR_CHART, ChartType.TIME_SERIES_LINE_CHART]:
            if should_use_no_code:
                df = dfs[0]
                buckets, values = build_time_series_buckets(
                    df,
                    group_by_columns[0],
                    self.configuration.get(VARIABLE_NAME_TIME_INTERVAL, TimeInterval.ORIGINAL),
                    metrics,
                )
                data[VARIABLE_NAME_X] = buckets
                data[VARIABLE_NAME_Y] = values

        return data

    def get_chart_configuration_settings(self, configuration: Dict = None) -> Dict:
        chart_type = (configuration or self.configuration or {}).get('chart_type')
        group_by_columns = (configuration or self.configuration or {}).get(VARIABLE_NAME_GROUP_BY)
        metrics = (configuration or self.configuration or {}).get(VARIABLE_NAME_METRICS)

        return dict(
            chart_type=chart_type,
            group_by_columns=group_by_columns,
            metrics=metrics,
        )

    def _execute_block(
        self,
        outputs_from_input_vars,
        custom_code: str = None,
        from_notebook: bool = False,
        global_vars: Dict = None,
        input_vars: List = None,
        upstream_block_uuids: List[str] = None,
        **kwargs,
    ) -> List:
        decorated_functions_configuration = []
        decorated_functions_data_source = []
        decorated_functions_render = []
        decorated_functions_x = []
        decorated_functions_xy = []
        decorated_functions_y = []
        test_functions = []

        results = merge_dict(dict(
            configuration=self._block_decorator(decorated_functions_configuration),
            data_source=self._block_decorator(decorated_functions_data_source),
            render=self._block_decorator(decorated_functions_render),
            test=self._block_decorator(test_functions),
            x=self._block_decorator(decorated_functions_x),
            xy=self._block_decorator(decorated_functions_xy),
            y=self._block_decorator(decorated_functions_y),
        ), outputs_from_input_vars)

        inputs_vars_use = list()
        if input_vars is not None:
            inputs_vars_use = input_vars

        chart_configuration_settings = self.get_chart_configuration_settings()

        group_by_columns = chart_configuration_settings['group_by_columns']
        metrics = chart_configuration_settings['metrics']

        if custom_code is not None and custom_code.strip():
            if not group_by_columns or not metrics:
                exec(custom_code, results)
        elif self.content is not None:
            exec(self.content, results)
        elif os.path.exists(self.file_path):
            with open(self.file_path) as file:
                exec(file.read(), results)

        options = dict(
            code=custom_code,
            results=results,
            upstream_block_uuids=upstream_block_uuids,
        )

        x = None
        y = None
        input_vars_from_data_source = inputs_vars_use.copy()

        if len(decorated_functions_data_source) >= 1:
            data_source_output = self.execute_block_function(
                decorated_functions_data_source[0],
                inputs_vars_use,
                from_notebook=from_notebook,
                global_vars=global_vars,
            )
            input_vars_from_data_source = [data_source_output]

        if len(decorated_functions_xy) >= 1:
            x, y = self.execute_block_function(
                decorated_functions_xy[0],
                input_vars_from_data_source,
                from_notebook=from_notebook,
                global_vars=global_vars,
            )
        else:
            if len(decorated_functions_x) >= 1:
                x = self.execute_block_function(
                    decorated_functions_x[0],
                    input_vars_from_data_source,
                    from_notebook=from_notebook,
                    global_vars=global_vars,
                )

            if len(decorated_functions_y) >= 1:
                y = self.execute_block_function(
                    decorated_functions_y[0],
                    input_vars_from_data_source,
                    from_notebook=from_notebook,
                    global_vars=global_vars,
                )

        if x is not None:
            options['x_values'] = x
        if y is not None:
            options['y_values'] = y

        if len(decorated_functions_configuration) >= 1:
            configuration = self.execute_block_function(
                decorated_functions_configuration[0],
                input_vars_from_data_source,
                from_notebook=from_notebook,
                global_vars=global_vars,
            )
            chart_configuration_settings = self.get_chart_configuration_settings(configuration)

        chart_type = chart_configuration_settings['chart_type']
        group_by_columns = chart_configuration_settings['group_by_columns']
        metrics = chart_configuration_settings['metrics']

        variables = self.get_variables_from_code_execution(results)
        outputs = self.post_process_variables(
            variables,
            chart_type=chart_type,
            group_by_columns=group_by_columns,
            metrics=metrics,
            **options,
        )

        return outputs
