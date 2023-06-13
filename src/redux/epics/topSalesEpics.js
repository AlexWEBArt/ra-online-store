import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { TOPSALES_REQUEST } from "../actions/actionTypes/actionTypes";
import { topSalesFailure, topSalesSucces } from "../actions/actionCreators/actionCreators";

export const topSalesEpic = action$ => action$.pipe(
    ofType(TOPSALES_REQUEST),
    switchMap(() => ajax.getJSON('https://ra-online-store-backend.onrender.com/api/top-sales').pipe(
        map(o => topSalesSucces(o)),
        catchError(o => of(topSalesFailure(o))),
    ))
)