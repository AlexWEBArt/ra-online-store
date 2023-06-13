import { CATEGORIES_FAILURE, CATEGORIES_REQUEST, CATEGORIES_SUCCES, CHOSE_CATEGORY } from "../actions/actionTypes/actionTypes"

const initialStore = {
    categories: [{id: 'All', title: 'Все'}],
    choseCategory: null,
    loading: false,
    error: null,
}

export default function categoriesReducer(state = initialStore, action) {
    switch(action.type) {
        case CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CATEGORIES_SUCCES:
            if (state.categories.length - 1 === action.payload.categories.length) {
                return {
                    ...state,
                    loading: false,
                }
            }
            action.payload.categories.forEach(item => state.categories.push(item))
            return {
                ...state,
                loading: false,
            }
        case CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case CHOSE_CATEGORY:
            return {
                ...state,
                choseCategory: action.payload.category,
            }
        default:
            return state
    }
}