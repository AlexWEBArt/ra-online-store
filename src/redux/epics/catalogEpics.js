import { ofType } from "redux-observable";
import { catchError, map, of, switchMap, debounceTime } from "rxjs";
import { ajax } from "rxjs/ajax";
import { CATALOG_REQUEST } from "../actions/actionTypes/actionTypes";
import { catalogFailure, catalogSucces } from "../actions/actionCreators/actionCreators";

export const catalogEpic = action$ => action$.pipe(
    ofType(CATALOG_REQUEST),
    map(o => o.payload),
    map(o => {
        const params = {};
        let prefParams = '?';

        if (o.search) {
            params.q = o.search.trim();
        }
        if (o.id) {
            params.categoryId = o.id;
        }
        if (o.offset) {
            params.offset = o.offset;
        }
        if (!o.search && !o.id && !o.offset) {
            prefParams = '';
        }
        
        return prefParams + new URLSearchParams(params);
    }),
    debounceTime(500),
    switchMap((params) => ajax.getJSON(`https://ra-online-store-backend.onrender.com/api/items${params}`).pipe(
        map(o => catalogSucces(o)),
        catchError(o => of(catalogFailure(o))),
    ))
)