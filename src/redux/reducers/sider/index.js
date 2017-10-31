import * as types from '../../constants/ActionTypes';

const initialState = {
    sideState : 'SHOW'
}

const sider = (state = initialState, action) =>{
    console.info(action.type)
    switch(action.type){
        case types.SET_SIDER_VISIBILITY:
            return Object.assign({}, state, {
                sideState: action.value
            })
        default:
            return state;
    }
}

export default sider