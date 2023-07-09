import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { CATEGORIES_REQUEST } from "../actions/actionTypes/actionTypes";
import { categoriesFailure, categoriesSucces } from "../actions/actionCreators/actionCreators";

export const categoriesEpic = action$ => action$.pipe(
    ofType(CATEGORIES_REQUEST),
    switchMap(() => ajax.getJSON('https://ra-online-store-backend.onrender.com/api/categories').pipe(
        map(o => {           
            o.unshift({ id: 1, title: 'Все' })
            return categoriesSucces(o)
        }),
        catchError(o => of(categoriesFailure(o))),
    ))
)