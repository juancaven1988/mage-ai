import styled from 'styled-components';

import dark from '@oracle/styles/themes/dark';
import { BORDER_RADIUS } from '@oracle/styles/units/borders';
import { PADDING_UNITS, UNIT } from '@oracle/styles/units/spacing';
import { transition } from '@oracle/styles/mixins';
import { ScrollbarStyledCss } from '@oracle/styles/scrollbars';
import { CONTAINED_PADDING_VALUE } from '../BrowseTemplates/index.style';

export const ICON_SIZE = UNIT * 2.5;
const NAV_WIDTH = 40 * UNIT;

export const ContainerStyle = styled.div`
  height: 100%;
  position: relative;
`;

export const NavigationStyle = styled.div<{
  height?: number;
}>`
  overflow: auto;
  position: fixed;
  width: ${NAV_WIDTH}px;
  z-index: 1;

  ${props => `
    background-color: ${(props.theme.background || dark.background).panel};
    border-right: 1px solid ${(props.theme.borders || dark.borders).light};
  `}

  ${props => props.height && `
    height: ${props.height - CONTAINED_PADDING_VALUE}px;
  `}

  ${props => !props.height && `
    height: 100%;
  `}
`;

export const TabsStyle = styled.div`
  padding-bottom: ${1 * UNIT}px;
  padding-left: ${PADDING_UNITS * UNIT}px;
  padding-right: ${PADDING_UNITS * UNIT}px;
  padding-top: ${1 * UNIT}px;
  width: 100%;

  ${props => `
    border-bottom: 1px solid ${(props.theme.borders || dark.borders).light};
  `}
`;

export const ButtonsStyle = styled.div`
  margin-top: ${PADDING_UNITS * UNIT}px;
  width: 100%;

  ${props => `
    border-top: 1px solid ${(props.theme.borders || dark.borders).light};
  `}
`;

export const ContentStyle = styled.div`
  margin-left: ${NAV_WIDTH}px;
`;

// export const SubheaderStyle = styled.div`
//   padding: ${PADDING_UNITS * UNIT}px;

//   ${props => `
//     background-color: ${(props.theme.background || dark.background).panel};
//     border-bottom: 1px solid ${(props.theme.borders || dark.borders).light};
//   `}
// `;

// export const CardsStyle = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   padding: ${UNIT * 0.75}px;
// `;

// export const CardStyle = styled.div`
//   border-radius: ${BORDER_RADIUS}px;
//   margin: ${UNIT * 0.75}px;
//   padding: ${UNIT * 2.5}px;
//   width: ${UNIT * 50}px;

//   &:hover {
//     cursor: pointer;
//   }

//   ${props => `
//     background-color: ${(props.theme.background || dark.background).panel};
//     border: 1px solid ${(props.theme.background || dark.background).chartBlock};
//     box-shadow: ${(props.theme.shadow || dark.shadow).frame};
//   `}
// `;

// export const CardTitleStyle = styled.div`
//   height: ${UNIT * 2.5}px;
// `;

// export const CardDescriptionStyle = styled.div`
//   height: ${UNIT * 2.5 * 2}px;
//   margin-top: ${1 * UNIT}px;
// `;

// export const TagsStyle = styled.div`
//   height: ${3 * UNIT}px;
//   margin-top: ${0.5 * UNIT}px;
//   overflow: hidden;
// `;
