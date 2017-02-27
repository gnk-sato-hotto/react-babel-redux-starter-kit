import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import editUser from 'reducers/editUser';

const rootReducer = combineReducers({
  router,
  editUser,
});

export default rootReducer;
