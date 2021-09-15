import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoadingIcon } from 'components/Icons/Loading';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

const Layout = lazy(() => import('components/Layout'));

const People = lazy(() => import('pages/people'));
const Person = lazy(() => import('pages/person'));
const NotFound = lazy(() => import('pages/404'));

function App(): EmotionJSX.Element {
  return (
    <Suspense fallback={<LoadingIcon />}>
      <Layout>
        <Switch>
          <Route exact path="/">
            <People />
          </Route>
          <Route exact path="/:id">
            <Person />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
