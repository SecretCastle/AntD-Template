import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import MenuFn from './children/menu';
import Sider from './sider'

const reducers = {
  routing: routerReducer,
  MenuFn,
  Sider
}

export default combineReducers(reducers)