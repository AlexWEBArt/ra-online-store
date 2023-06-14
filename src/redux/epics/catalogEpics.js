import { ofType } from "redux-observable";
import { catchError, map, of, switchMap, filter, debounceTime} from "rxjs";
import { ajax } from "rxjs/ajax";
import { CATALOG_REQUEST, CHANGE_SEARCH_FIELD } from "../actions/actionTypes/actionTypes";
import { catalogRequest, catalogFailure, catalogSucces } from "../actions/actionCreators/actionCreators";

export const catalogEpic = action$ => action$.pipe(
    ofType(CATALOG_REQUEST),
    map(o => o.payload),
    map(o => {
        const params = {};
        let prefParams = '?';

        if (o.search) {
            params.q = o.search
        }
        if (o.id) {
            params.categoryId = o.id
        }
        if (o.offset) {
            params.offset = o.offset
        }
        if (!o.search && !o.id && !o.offset) {
            prefParams = ''
        }
        
        return prefParams + new URLSearchParams(params)
    }),
    switchMap((params) => ajax.getJSON(`https://ra-online-store-backend.onrender.com/api/items${params}`).pipe(
        map(o => catalogSucces(o)),
        catchError(o => of(catalogFailure(o))),
    ))
)

export const changeSearchEpic = action$ => action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    map(o => o.payload.search.trim()),
    filter(o => o !== ''),
    debounceTime(500),
    map(o => catalogRequest(o)),
)