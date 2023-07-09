import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import topSalesReducer from "../reducers/topSalesReducer";
import { topSalesEpic } from "../epics/topSalesEpics";
import catalogReducer from "../reducers/catalogReducer";
import { categoriesEpic } from "../epics/categoriesEpics";
import { catalogEpic } from "../epics/catalogEpics";
import productReducer from "../reducers/productReducer";
import { productEpic } from "../epics/productEpics";
import cartReducer from "../reducers/cartReducer";
import { cartOrderEpic } from "../epics/cartEpics";
import favoritesReducer from "../reducers/favoritesReducer";

const reducer = combineReducers({
    topSales: topSalesReducer,
    catalog: catalogReducer,
    product: productReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
});

const composeEnhancers = window.__REDUXE_DEVTOOLS_EXTENTION__ || compose;

const epic = combineEpics(
    topSalesEpic,
    categoriesEpic,
    catalogEpic,
    productEpic,
    cartOrderEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;