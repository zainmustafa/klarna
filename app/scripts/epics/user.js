/**
 * @module Epics/userLogin
 * @desc User
 */

import { Observable } from "rxjs/Observable";
import { fromPromise } from "rxjs/observable/fromPromise";

import { ActionTypes } from "constants/index";
import { register, login } from "../utils/auth";
import { showAlert } from "../actions";

export function userLogin(action$) {
    return action$
        .ofType(ActionTypes.USER_LOGIN_REQUEST)
        .debounceTime(2000)
        .switchMap(({ payload }) => fromPromise(login(payload))
            .map(data => ({
                type: ActionTypes.USER_REGISTER_SUCCESS,
                payload: data
            }))
            .catch(error => Observable.of(
                {
                    type: ActionTypes.USER_REGISTER_FAILURE,
                    payload: { error },
                    error: true
                },
                showAlert(error.code, {
                    type: "error",
                    icon: "i-flash"
                })
            )))
}

export function userRegister(action$) {
    return action$
        .ofType(ActionTypes.USER_REGISTER_REQUEST)
        .debounceTime(2000)
        .switchMap(({ payload }) => fromPromise(register(payload))
            .map(data => ({
                type: ActionTypes.USER_REGISTER_SUCCESS,
                payload: data
            }))
            .catch(error => Observable.of(
                {
                    type: ActionTypes.USER_REGISTER_FAILURE,
                    payload: { error },
                    error: true
                },
                showAlert(error.code, {
                    type: "error",
                    icon: "i-flash"
                })
            )));
}

export function userLogout(action$) {
    return action$
        .ofType(ActionTypes.USER_LOGOUT_REQUEST)
        .mergeMap(() =>
            Observable.merge(
                Observable.of({ type: ActionTypes.USER_LOGOUT_SUCCESS })
            )
        )
        .catch(
            /* istanbul ignore next  */ error =>
                Observable.of({
                    type: ActionTypes.USER_LOGOUT_FAILURE,
                    payload: { error },
                    error: true
                })
        );
}
