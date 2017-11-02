import * as Types from './types/ty-menu';

export function ShowHideMenu(obj){
    return {
        type: Types.SHOWMENU,
        obj
    }
}