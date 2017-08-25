import * as types from './types';

export function sort(data) {
    return {
        type: types.SORT,
        data: data
    };
}


export function isLoading(){
    return{
        type:types.ISLOADING
    }
}