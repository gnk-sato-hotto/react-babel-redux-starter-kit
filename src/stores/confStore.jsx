import routes from 'routes';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import { createStore, compose} from 'redux';
import rootReducer from 'reducers/index';


const finalCreateStore = compose(
  reduxReactRouter({ routes, createHistory })
)(createStore);

export default function confStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
