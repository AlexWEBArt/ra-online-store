import { TOPSALES_FAILURE, TOPSALES_REQUEST, TOPSALES_SUCCES } from "../actions/actionTypes/actionTypes";

const initialStore = {
    items: [],
    loading: false,
    error: null,
}

export default function topSalesReducer(state = initialStore, action) {
    switch(action.type) {
        case TOPSALES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case TOPSALES_SUCCES:
            return {
                ...state,
                items: action.payload.items,
                loading: false,
            }
        case TOPSALES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        default:
            return state
    }
}