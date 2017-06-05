

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { estadoInicial } from './Reducers'

const logger = createLogger({});
const middleware = applyMiddleware({logger,thunk})



let myreducer = combineReducers({
    estadoInicial,middleware
   
}); 



let store = createStore(myreducer, applyMiddleware(logger,thunk))
export default store;