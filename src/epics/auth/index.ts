import { LOGIN_MESSAGE, LOGOUT_MESSAGE } from "./types";
import { ofType } from "redux-observable";
import { filter } from 'rxjs/operators';

const authEpic$ = (action$, state$) => action$.pipe(
    ofType(LOGIN_MESSAGE),
    filter(() => state$.value.counter % 2 === 1),
);

const authReducer = (state = { isLogged: false }, action) => {
    switch (action.type) {
        case LOGIN_MESSAGE:
            return { isLogged: true };

        case LOGOUT_MESSAGE:
            return { isLogged: false };

        default:
            return state;
    }
};


export {
    authEpic$ as epic,
    authReducer as reducer
}