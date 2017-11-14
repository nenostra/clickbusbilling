import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as reducers from './reducers';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import { routesMap } from './components/Switcher/Switcher';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { reducer as form } from 'redux-form';

const history = createHistory();
const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);
const rootReducer = combineReducers({...reducers, location: reducer, form});

const epicMiddleware = createEpicMiddleware(rootEpic);
const middlewares = applyMiddleware(middleware, epicMiddleware, logger);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(enhancer, middlewares)
);

export default store;