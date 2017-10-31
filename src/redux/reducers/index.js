import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import MenuFn from './children/menu'

const reducers = {
  routing: routerReducer,
  MenuFn
}

export default combineReducers(reducers)