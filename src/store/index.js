import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";
import blockUIMiddleware from 'react-block-ui/reduxMiddleware';

const loggerMiddleware = createLogger();

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware, blockUIMiddleware));

window.store = store;
export default store;