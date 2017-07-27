import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducerIndex from '../reducers/index'

const middleware = applyMiddleware(thunk, logger)
export default createStore(reducerIndex, middleware)
