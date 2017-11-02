import * as Types from 'reduxSrc/actions/menu/types/ty-menu';

function showhidemenufn(state = { isShow:false}, action){
    switch(action.type){
        case Types.SHOWMENU:
            return {
                isShow: action.obj.isShow
            }
        default: 
            return state;
    }
}

export default showhidemenufn;