import {
    GETPARAM
} from 'reduxSrc/types'

const initState = {
    hasid:false,
    id:''
}

function checkHasId(state = initState , action){
    switch(action.type){
        case GETPARAM:
            return {
                hasid : action.params.hasid,
                id: action.params.id,
            }
        default:
            return state
    }
}

export default checkHasId;