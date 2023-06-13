import { ofType } from "redux-observable";
import { catchError, map, of, switchMap, filter, debounceTime, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { CATALOG_REQUEST, CATALOG_CATEGORY_REQUEST, CATALOG_UPLOAD_REQUEST, CATALOG_CATEGORY_UPLOAD_REQUEST, CHANGE_SEARCH_FIELD, SEARCH_ITEMS_REQUEST } from "../actions/actionTypes/actionTypes";
import { catalogCategoryFailure, catalogCategorySucces, catalogFailure, catalogSucces, catalogUploadFailure, catalogUploadSucces, searchItemsFailure, searchItemsRequest, searchItemsSuccess } from "../actions/actionCreators/actionCreators";

export const catalogEpic = action$ => action$.pipe(
    ofType(CATALOG_REQUEST),
    switchMap(() => ajax.getJSON('https://ra-online-store-backend.onrender.com/api/items').pipe(
        map(o => catalogSucces(o)),
        catchError(o => of(catalogFailure(o))),
    ))
)

export const changeSearchEpic = action$ => action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    map(o => o.payload.search.trim()),
    filter(o => o !== ''),
    debounceTime(500),
    map(o => searchItemsRequest(o)),
)

export const searchItemsEpic = action$ => action$.pipe(
    ofType(SEARCH_ITEMS_REQUEST),
    map(o => o.payload.search),
    tap(o => console.log(o)),
    map(o => new URLSearchParams({ q: o })),
    tap(o => console.log(o)),
    switchMap(o => ajax.getJSON(`https://ra-online-store-backend.onrender.com/api/items?${o}`).pipe(
        // retry(3),
        map(o => searchItemsSuccess(o)),
        catchError(e => of(searchItemsFailure(e))),
    )),
);

export const catalogCategoryEpic = action$ => action$.pipe(
    ofType(CATALOG_CATEGORY_REQUEST),
    map(o => o.payload.id),
    map(o => new URLSearchParams({ categoryId: o })),
    switchMap((id) => ajax.getJSON(`https://ra-online-store-backend.onrender.com/api/items?${id}`).pipe(
        map(o => catalogCategorySucces(o)),
        catchError(o => of(catalogCategoryFailure(o))),
    ))
)

export const catalogUploadEpic = action$ => action$.pipe(
    ofType(CATALOG_UPLOAD_REQUEST),
    tap(o => console.log(o)),
    map(o => o.payload.offset),
    map(o => new URLSearchParams({ offset: o })),
    switchMap((offset) => ajax.getJSON(`https://ra-online-store-backend.onrender.com/api/items?${offset}`).pipe(
        map(o => catalogUploadSucces(o)),
        catchError(o => of(catalogUploadFailure(o))),
    ))
)

export const catalogCategoryUploadEpic = action$ => action$.pipe(
    ofType(CATALOG_CATEGORY_UPLOAD_REQUEST),
    map(o => o.payload),
    map(o => {
        const params = {};
        let prefParams = '?';
        console.log(o)
        if (o.search) {
            params.q = o.search
        }
        if (o.id) {
            params.categoryId = o.id
        }
        if (o.offset) {
            params.offset = o.offset
        }
        if (!o) {
            prefParams = ''
        }
        return prefParams + new URLSearchParams(params)
    }),
    switchMap((payload) => ajax.getJSON(`https://ra-online-store-backend.onrender.com/api/items${payload}`).pipe(
        map(o => catalogUploadSucces(o)),
        catchError(o => of(catalogUploadFailure(o))),
    ))
)