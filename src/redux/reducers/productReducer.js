import { PRODUCT_COUNTER_DECREMENT, PRODUCT_FAILURE, PRODUCT_COUNTER_INCREMENT, PRODUCT_REQUEST, PRODUCT_SUCCES, PRODUCT_SIZE_SELECTED } from "../actions/actionTypes/actionTypes";

const initialStore = {
    product: null,
    counter: 1,
    size: null,
    loading: false,
    error: null,
};

export default function productReducer(state = initialStore, action) {
    switch(action.type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                counter: 1,
                size: null,
                loading: true,
            }
        case PRODUCT_SUCCES:
            return {
                ...state,
                product: action.payload.product,
                loading: false,
            }
        case PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case PRODUCT_COUNTER_INCREMENT:
            if (state.counter === 10) {return state}
            return {
                ...state,
                counter: state.counter + 1,
            }
        case PRODUCT_COUNTER_DECREMENT:
            if (state.counter === 1) {return state}
            return {
                ...state,
                counter: state.counter - 1,
            }
        case PRODUCT_SIZE_SELECTED:
            return {
                ...state,
                size: action.payload.size
            }
        default:
            return state
    }
}