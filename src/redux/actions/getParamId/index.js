import {
    GETPARAM
} from 'reduxSrc/types'

export function getParamId(params){
    return {
        type: GETPARAM,
        params
    }
}