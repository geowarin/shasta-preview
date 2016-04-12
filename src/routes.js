import React from 'react';
import { Route, IndexRoute } from 'shasta-router';

import HomeView from './views/Home';
import AboutView from './views/About';
import NotFoundView from './views/NotFound';

const routes = (
  <Route path="/">
    <IndexRoute component={HomeView} />
    <Route path="/about" component={AboutView} />
    <Route path="*" component={NotFoundView} />
  </Route>
);

export default routes;
