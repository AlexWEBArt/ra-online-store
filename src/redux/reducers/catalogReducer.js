import { CATALOG_FAILURE, CATALOG_REQUEST, CATALOG_SUCCES, CHANGE_SEARCH_FIELD, CATEGORIES_FAILURE, CATEGORIES_REQUEST, CATEGORIES_SUCCES, CHOSE_CATEGORY } from "../actions/actionTypes/actionTypes";

const initialStore = {
    items: [],
    categories: [],
    choseCategory: null,
    searchItems: '',
    stopOffset: false,
    loading: false,
    error: null,
}

export default function catalogReducer(state = initialStore, action) {
    switch (action.type) {
        case CATALOG_REQUEST:
            if (!action.payload.offset) {
                state.items = [];
            }
            
            return {
                ...state,
                stopOffset: true,
                loading: true,
            }
        case CATALOG_SUCCES:
            state.stopOffset = false;
            action.payload.items.forEach(item => state.items.push(item));

            if (action.payload.items.length < 6) {
                state.stopOffset = true;
            }

            return {
                ...state,
                loading: false,
            }
        case CATALOG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case CHANGE_SEARCH_FIELD:
            if (action.payload.search === '') {
                state.items = [];
            }

            return {
                ...state,
                searchItems: action.payload.search,
            }
        case CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CATEGORIES_SUCCES:
            return {
                ...state,
                categories: action.payload.categories,
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
                items: [],
                choseCategory: action.payload.category,
            }
        default:
            return state
    }
}