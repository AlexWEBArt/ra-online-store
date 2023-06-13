import { ADD_TO_CART, CART_ORDER_FAILURE, CART_ORDER_REQUEST, CART_ORDER_SUCCES, CART_RESET, CLOSE_MODAL, REMOVE_FROM_CART } from "../actions/actionTypes/actionTypes";

const initialStore = {
    products: [],
    totalCost: 0,
    productsCounter: 0,
    status: null,
    loading: false,
    error: null,
};

export default function cartReducer(state = initialStore, action) {
    switch(action.type) {
        case ADD_TO_CART:

            const availableProduct = state.products.filter(item => item.product.id === action.payload.item.product.id && item.size === action.payload.item.size)
            if (availableProduct[0]) {

                state.products.forEach(item => {if (item.product.id === availableProduct[0].product.id) { item.counter = item.counter + action.payload.item.counter}})

            } else {
                state.products.push(action.payload.item)
            }
            
            return {
                ...state,
                totalCost: state.products.reduce((totalCost, item) => totalCost + (item.product.price * item.counter), 0),
                productsCounter: state.products.reduce((productsCounter, item) => productsCounter + item.counter, 0),
            }
        case REMOVE_FROM_CART:
            console.log(action)
            return {
                ...state,
                products: state.products.filter(item => item.product.id !== action.payload.product.id),
                totalCost: state.totalCost - action.payload.product.price * action.payload.product.counter,
                productsCounter: state.productsCounter - action.payload.product.counter,
            }
        case CART_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CART_ORDER_SUCCES:
            return {
                ...state,
                status: action.payload.status,
                loading: false,
            }
        case CART_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case CART_RESET:
            return {
                ...state,
                products: [],
                totalCost: 0,
                productsCounter: 0,
                loading: false,
                error: null,
            }
        case CLOSE_MODAL:
            return {
                ...state,
                status: null,
            }
        default:
            return state
    }
}