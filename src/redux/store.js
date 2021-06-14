import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const middleware = [];

//if (Node.env.NODE_ENV === 'development') {
middleware.push(logger);
//}

//const store = createStore(rootReducer, applyMiddleware(...middleware));
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

