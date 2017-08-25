
import * as types from '../actions/types';

import items from './items'

const initialState = {
    sorted_items: [],
    sort_item : {},
    items:items,
    loading: false
};

//const api_key = 'fd5fadd98b414e4091e60466e59dcf02'



const sortGiphy = (items)=>{
    let name = items[Math.floor(Math.random()*items.length)];
    
    return name
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.SORT:
       
        if(state.items.length<1){
            return state
        }
        const item = sortGiphy(state.items)
        const s_item = {name:item, gif: action.data.data.data.image_url}
        //funcion chooser
            return{
                ...state,
                sorted_items: [].concat(state.sorted_items, s_item),
                sort_item: s_item,
                items: state.items.filter(o=>o !==s_item.name ),
                loading: false
            }
        
        case types.ISLOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state
    }
}