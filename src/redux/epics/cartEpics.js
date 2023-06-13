import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { CART_ORDER_REQUEST } from "../actions/actionTypes/actionTypes";
import { cartOrderFailure, cartOrderSucces } from "../actions/actionCreators/actionCreators";

export const cartOrderEpic = action$ => action$.pipe(
    ofType(CART_ORDER_REQUEST),
    map(o => o.payload.body),
    switchMap((body) => ajax({
        url: 'https://ra-online-store-backend.onrender.com/api/order',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        //   'rxjs-custom-header': 'Rxjs'
        },
        body: JSON.stringify(body),
      }).pipe(
        map(o => cartOrderSucces(o.status)),
        catchError(o => of(cartOrderFailure(o))),
    ))
)