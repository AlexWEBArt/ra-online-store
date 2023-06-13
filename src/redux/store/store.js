import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import topSalesReducer from "../reducers/topSalesReducer";
import { topSalesEpic } from "../epics/topSalesEpics";
import catalogReducer from "../reducers/catalogReducer";
import { categoriesEpic } from "../epics/categoriesEpics";
import { catalogCategoryEpic, catalogCategoryUploadEpic, catalogEpic, catalogUploadEpic, changeSearchEpic, searchItemsEpic } from "../epics/catalogEpics";
import categoriesReducer from "../reducers/categoriesReducer";
import productReducer from "../reducers/productReducer";
import { productEpic } from "../epics/productEpics";
import cartReducer from "../reducers/cartReducer";
import { cartOrderEpic } from "../epics/cartEpics";

const reducer = combineReducers({
    topSales: topSalesReducer,
    catalog: catalogReducer,
    categories: categoriesReducer,
    product: productReducer,
    cart: cartReducer,
});

const composeEnhancers = window.__REDUXE_DEVTOOLS_EXTENTION__ || compose;

const epic = combineEpics(
    topSalesEpic,
    categoriesEpic,
    catalogCategoryEpic,
    catalogEpic,
    changeSearchEpic,
    searchItemsEpic,
    catalogUploadEpic,
    catalogCategoryUploadEpic,
    productEpic,
    cartOrderEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;