

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './Reducers'

const logger = createLogger({});
const middleware = applyMiddleware({logger,thunk})

let store = createStore(reducer, applyMiddleware(logger,thunk))
export default store;