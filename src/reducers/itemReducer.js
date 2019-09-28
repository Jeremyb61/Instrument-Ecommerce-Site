import { FETCH_ITEMS, NEW_ITEMS } from '../actions/types';

const initialState = {
    items : [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        
        case NEW_ITEMS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}