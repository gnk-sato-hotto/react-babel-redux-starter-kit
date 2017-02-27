import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import EditUser from 'containers/editUser';
import config   from 'config';
import 'bootstrap/dist/css/bootstrap.min.css';

export default (
  <Router history={browserHistory}>

    <Route path={config.ROOT_PATH} component={EditUser}>
      <IndexRoute component={EditUser} />
      <Route path="editUser" component={EditUser} />
    </Route>

  </Router>
);
