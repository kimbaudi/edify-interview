import styled from '@emotion/styled';
import Container from 'components/Styles/container';
import FlexAlign from 'components/Styles/flexbox';

export type MainStyle = {
  container?: ContainerType;
  align?: FlexAlignType;
};

export const Main = styled.main<MainStyle>`
  flex: 1 0 auto;
  overflow: auto;
  padding: 0;
  ${Container}
  ${FlexAlign}
`;
