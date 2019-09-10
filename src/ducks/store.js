import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer'

const rootReducer = userReducer

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
