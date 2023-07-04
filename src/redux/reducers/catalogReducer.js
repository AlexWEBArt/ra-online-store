import { CATALOG_FAILURE, CATALOG_REQUEST, CATALOG_SUCCES, CHANGE_SEARCH_FIELD, CATEGORIES_FAILURE, CATEGORIES_REQUEST, CATEGORIES_SUCCES, CHOSE_CATEGORY } from "../actions/actionTypes/actionTypes";

const initialStore = {
    items: [],
    categories: [{ id: 'All', title: 'Все' }],
    choseCategory: null,
    searchItems: '',
    stopOffset: false,
    loading: false,
    error: null,
}

export default function catalogReducer(state = initialStore, action) {
    switch (action.type) {
        case CATALOG_REQUEST:
            console.log(action.payload)
            console.log(state.choseCategory)
            if (state.searchItems && action.payload.search.length > 0 && state.items.length > 0 && !action.payload.offset) {
                state.items = [];
            }
            return {
                ...state,
                stopOffset: true,
                loading: true,
            }
        case CATALOG_SUCCES:
            let repeated = false;
            let stopOffset = false;

            if (state.items.length > 0) {
                repeated = action.payload.items.some(item => item.id === state.items[0].id)
            }

            if (repeated) {
                return {
                    ...state,
                    stopOffset,
                    loading: false,
                }
            }

            if (action.payload.items.length < 6) {
                stopOffset = true
            }

            action.payload.items.forEach(item => state.items.push(item))

            return {
                ...state,
                stopOffset,
                repeated: false,
                loading: false,
            }
        case CATALOG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case CHANGE_SEARCH_FIELD:
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
            if (state.categories.length - 1 !== action.payload.categories.length) {
                action.payload.categories.forEach(category => state.categories.push(category))
            }
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
                items: [],
                choseCategory: action.payload.category,
            }
        default:
            return state
    }
}