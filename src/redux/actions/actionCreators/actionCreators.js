import { CART_ORDER_FAILURE, CART_ORDER_REQUEST, CART_ORDER_SUCCES, TOPSALES_FAILURE, TOPSALES_REQUEST, TOPSALES_SUCCES } from "../actionTypes/actionTypes";
import { CATEGORIES_FAILURE, CATEGORIES_REQUEST, CATEGORIES_SUCCES } from "../actionTypes/actionTypes";
import { CATALOG_FAILURE, CATALOG_REQUEST, CATALOG_SUCCES } from "../actionTypes/actionTypes";
import { SEARCH_ITEMS_REQUEST, SEARCH_ITEMS_FAILURE, SEARCH_ITEMS_SUCCESS, CHANGE_SEARCH_FIELD } from "../actionTypes/actionTypes";
import { CATALOG_CATEGORY_FAILURE, CATALOG_CATEGORY_REQUEST, CATALOG_CATEGORY_SUCCES } from "../actionTypes/actionTypes";
import { CATALOG_UPLOAD_FAILURE, CATALOG_UPLOAD_REQUEST, CATALOG_UPLOAD_SUCCES } from "../actionTypes/actionTypes";
import { CATALOG_CATEGORY_UPLOAD_FAILURE, CATALOG_CATEGORY_UPLOAD_REQUEST, CATALOG_CATEGORY_UPLOAD_SUCCES } from "../actionTypes/actionTypes";
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCES } from "../actionTypes/actionTypes";
import { CHOSE_CATEGORY } from "../actionTypes/actionTypes";
import { PRODUCT_COUNTER_INCREMENT, PRODUCT_COUNTER_DECREMENT } from "../actionTypes/actionTypes";
import { PRODUCT_SIZE_SELECTED } from "../actionTypes/actionTypes";
import { ADD_TO_CART, REMOVE_FROM_CART, CART_RESET, CLOSE_MODAL } from "../actionTypes/actionTypes";

export const topSalesRequest = () => ({
    type: TOPSALES_REQUEST,
});
export const topSalesSucces = (items) => ({
    type: TOPSALES_SUCCES, payload: {items}
});
export const topSalesFailure = (error) => ({
    type: TOPSALES_FAILURE, payload: {error}
});


export const categoriesRequest = () => ({
    type: CATEGORIES_REQUEST,
});
export const categoriesSucces = (categories) => ({
    type: CATEGORIES_SUCCES, payload: {categories}
});
export const categoriesFailure = (error) => ({
    type: CATEGORIES_FAILURE, payload: {error}
});


export const searchItemsRequest = search => ({
    type: SEARCH_ITEMS_REQUEST, payload: {search}
});
export const searchItemsFailure = error => ({
    type: SEARCH_ITEMS_FAILURE, payload: {error}
});
export const searchItemsSuccess = items => ({
    type: SEARCH_ITEMS_SUCCESS, payload: {items}
});
export const changeSearchField = search => ({
    type: CHANGE_SEARCH_FIELD, payload: {search}
});


export const catalogRequest = () => ({
    type: CATALOG_REQUEST,
});
export const catalogSucces = (items) => ({
    type: CATALOG_SUCCES, payload: {items}
});
export const catalogFailure = (error) => ({
    type: CATALOG_FAILURE, payload: {error}
});


export const choseCategory = (category) => ({
    type: CHOSE_CATEGORY, payload: {category}
})


export const catalogCategoryRequest = (id) => ({
    type: CATALOG_CATEGORY_REQUEST, payload: {id}
});
export const catalogCategorySucces = (items) => ({
    type: CATALOG_CATEGORY_SUCCES, payload: {items}
});
export const catalogCategoryFailure = (error) => ({
    type: CATALOG_CATEGORY_FAILURE, payload: {error}
});


export const catalogUploadRequest = (offset) => ({
    type: CATALOG_UPLOAD_REQUEST, payload: {offset}
});
export const catalogUploadSucces = (items) => ({
    type: CATALOG_UPLOAD_SUCCES, payload: {items}
});
export const catalogUploadFailure = (error) => ({
    type: CATALOG_UPLOAD_FAILURE, payload: {error}
});


export const catalogCategoryUploadRequest = (search, id, offset) => ({
    type: CATALOG_CATEGORY_UPLOAD_REQUEST, payload: {search, id, offset}
});
export const catalogCategoryUploadSucces = (items) => ({
    type: CATALOG_CATEGORY_UPLOAD_SUCCES, payload: {items}
});
export const catalogCategoryUploadFailure = (error) => ({
    type: CATALOG_CATEGORY_UPLOAD_FAILURE, payload: {error}
});


export const productRequest = (id) => ({
    type: PRODUCT_REQUEST, payload: {id}
});
export const productSucces = (product) => ({
    type: PRODUCT_SUCCES, payload: {product}
});
export const productFailure = (error) => ({
    type: PRODUCT_FAILURE, payload: {error}
});


export const productCounterIncrement = () => ({
    type: PRODUCT_COUNTER_INCREMENT,
});
export const productCounterDecrement = () => ({
    type: PRODUCT_COUNTER_DECREMENT,
});


export const productSizeSelected = (size) => ({
    type: PRODUCT_SIZE_SELECTED, payload: {size}
});


export const addToCart = (item) => ({
    type: ADD_TO_CART, payload: {item}
});
export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART, payload: {product}
});
export const cartReset = () => ({
    type: CART_RESET,
});
export const closeModal = () => ({
    type: CLOSE_MODAL,
})


export const cartOrderRequest = (body) => ({
    type: CART_ORDER_REQUEST, payload: {body}
});
export const cartOrderSucces = (status) => ({
    type: CART_ORDER_SUCCES, payload: {status}
});
export const cartOrderFailure = (error) => ({
    type: CART_ORDER_FAILURE, payload: {error}
});
