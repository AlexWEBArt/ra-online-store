import { CATALOG_FAILURE, CATALOG_REQUEST, CATALOG_SUCCES, CATALOG_CATEGORY_REQUEST, CATALOG_CATEGORY_SUCCES, CATALOG_CATEGORY_FAILURE, CATALOG_UPLOAD_REQUEST, CATALOG_UPLOAD_SUCCES, CATALOG_UPLOAD_FAILURE, CATALOG_CATEGORY_UPLOAD_REQUEST, CATALOG_CATEGORY_UPLOAD_SUCCES, CATALOG_CATEGORY_UPLOAD_FAILURE, SEARCH_ITEMS_REQUEST, SEARCH_ITEMS_FAILURE, SEARCH_ITEMS_SUCCESS, CHANGE_SEARCH_FIELD } from "../actions/actionTypes/actionTypes";

const initialStore = {
    items: [],
    searchItems: '',
    loading: false,
    error: null,
}

export default function catalogReducer(state = initialStore, action) {
    switch(action.type) {
        case CATALOG_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CATALOG_SUCCES:
            return {
                ...state,
                items: action.payload.items,
                loading: false,
            }
        case CATALOG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case SEARCH_ITEMS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SEARCH_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            };
        case SEARCH_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                loading: false,
                error: null,
            };
        case CHANGE_SEARCH_FIELD:
            // const {search} = action.payload;
            // if (search === '') { return {
            //     ...state,
            //     items: [],
            //     search,
            // };}
            return {
                ...state,
                search: action.payload.search,
            };
        case CATALOG_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CATALOG_CATEGORY_SUCCES:
            return {
                ...state,
                items: action.payload.items,
                loading: false,
            }
        case CATALOG_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case CATALOG_UPLOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CATALOG_UPLOAD_SUCCES:
            action.payload.items.forEach(item => state.items.push(item))
            return {
                ...state,
                loading: false,
            }
        case CATALOG_UPLOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        case CATALOG_CATEGORY_UPLOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CATALOG_CATEGORY_UPLOAD_SUCCES:
            action.payload.items.forEach(item => state.items.push(item))
            return {
                ...state,
                loading: false,
            }
        case CATALOG_CATEGORY_UPLOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message,
            }
        default:
            return state
    }
}