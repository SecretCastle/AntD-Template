import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import CheckHasId from './getParamId'

const reducers = {
  routing: routerReducer,
  CheckHasId
}

export default combineReducers(reducers)