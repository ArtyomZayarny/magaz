import { createStore, compose} from 'redux'

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS';

const initialState = {
    products:[],
    role:'admin'
}
export const getProducts = (products) => {
    return {
        type:GET_PRODUCTS,
        payload:products
    }
}

export const addProduct = (products) => {
    return {
        type:ADD_PRODUCT,
        payload:products
        
    }
}
export const deleteProduct = (products) => {
    return {
        type:DELETE_PRODUCT,
        payload:products
    }
}
export const deleteAllProducts = (products) => {
    return {
        type:DELETE_ALL_PRODUCTS,
        payload:products
    }
}


const mainReducer = (state=initialState,action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {...state, ...action.payload}
        case ADD_PRODUCT:
            return {...state, ...action.payload}
        case DELETE_PRODUCT:
            return {...state, ...action.payload}
        case DELETE_ALL_PRODUCTS:
            return {...state, ...action.payload}
    }
    return state
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(mainReducer,composeEnhancers());

export default store;