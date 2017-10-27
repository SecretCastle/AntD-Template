import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = {
  routing: routerReducer
}

export default combineReducers(reducers)