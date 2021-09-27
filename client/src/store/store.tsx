import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlewares = [logger];

const reduxStore = createStore(rootReducer, applyMiddleware(...middlewares));

export default reduxStore;
