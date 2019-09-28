import { FETCH_ITEMS, NEW_ITEMS } from './types';

import axios from 'axios';
const url = "http://localhost:8000";

export const fetchItems = (param) => dispatch => {
    axios.get(`${url}/api/products/${param}`)
        .then(items => {
            dispatch({
                type: FETCH_ITEMS,
                payload: items.data
            })
        })
}
export const createItem = (itemData) => dispatch => {
    axios.post(`${url}/api/products/add`, itemData)
        .then((item) => {
            dispatch({
                type: NEW_ITEMS,
                payload: item
            })
        });
}
