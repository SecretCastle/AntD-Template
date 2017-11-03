import {
    i18N
} from './types/ty-i18N';
 

export function LanguageSet(language){
    return {
        type: i18N,
        language
    }
}