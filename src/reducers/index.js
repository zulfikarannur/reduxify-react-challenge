import {combineReducers} from 'redux'
import APODreducer from './APODreducer'

export default combineReducers({
  APODdata: APODreducer
})
