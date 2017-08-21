import * as types from '../actions/types';

import items from './items'

const initialState = {
    sorted_items: [],
    sort_item : "",
    items:items
};


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.SORT:
        //funcion chooser
            return {
                ...state,
                count: state.count + 1
            };
        
        default:
            return state
    }
}