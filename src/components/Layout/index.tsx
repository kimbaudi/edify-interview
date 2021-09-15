import { Fragment } from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Main } from './styles';
import type { MainStyle } from './styles';

export type LayoutProps = {
  children?: React.ReactNode;
  style?: MainStyle;
};

function Layout(props: LayoutProps): EmotionJSX.Element {
  const {
    children,
    style = {
      container: 'xl-fluid',
    },
  } = props;
  return (
    <Fragment>
      <Main {...style}>{children}</Main>
    </Fragment>
  );
}

export default Layout;
