import styled from 'styled-components/native';
import { dotSplit } from '../../../utils/StringUtils';

export const Center = styled.View<any>`
  display: ${(props: any) => (props.flex ? 'flex' : 'block')};
  flex: ${(props: any) => props.flex ? props.flex : 1};
  flex-direction: ${(props: any) => (props.direction ? props.direction : 'column')};
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => {
    if (props.bg) {
      const themeRef = dotSplit(props.bg);
      return props.theme.colors[themeRef[0]][themeRef[1]];
    }

    return props.theme.defaultProps.bgColor;
  }};
`;
