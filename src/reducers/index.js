import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import SiderVisibility from './sider/index'

const reducers = {
  routing: routerReducer,
  SiderVisibility
}

export default combineReducers(reducers)