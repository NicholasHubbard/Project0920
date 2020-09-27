// get all the functions we need from redux
import { combineReducers, createStore, applyMiddleware } from 'redux';
// middle ware for making actions asynchronous
import thunkMiddleware from 'redux-thunk';
// will log to console all the actions that are run
import { createLogger } from 'redux-logger';
// middleware to help with api calls
import callAPI from './helpers/callAPIMiddleware';

// pull our reducers (TO DO)
import exercises from './exercises/reducer';

// combine multiple reducers into one
const rootReducer = combineReducers({
  exercises
});

const middleware = applyMiddleware(thunkMiddleware, callAPI, createLogger());

// set up middleware (TO DO)

// create a redux store using the combined reducer and middleware funcitons
const store = createStore(rootReducer, middleware);

export default store;
