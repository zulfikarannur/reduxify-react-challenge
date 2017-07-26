import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reducerIndex from '../reducers/index'

const middleware = applyMiddleware(logger)
export default createStore(reducerIndex, middleware)
