import { ofType } from "redux-observable";
import { PRODUCT_REQUEST } from "../actions/actionTypes/actionTypes";
import { catchError, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { productFailure, productSucces } from "../actions/actionCreators/actionCreators";

export const productEpic = action$ => action$.pipe(
    ofType(PRODUCT_REQUEST),
    map(o => o.payload.id),
    switchMap((id) => ajax.getJSON(`https://ra-online-store-backend.onrender.com/api/items/${id}`).pipe(
        map(o => productSucces(o)),
        catchError(o => of(productFailure(o))),
    ))
)