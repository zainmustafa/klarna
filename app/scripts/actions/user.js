// @flow
/**
 * @module Actions/User
 * @desc Actions for User
 */

import { ActionTypes } from "constants/index";

/**
 * Login
 * @param {Object} payload
 * @returns {Object}
 */
export function login(payload : Object): Object {
    return {
        type: ActionTypes.USER_LOGIN_REQUEST,
        payload
    };
}

/**
 * Logout
 *
 * @returns {Object}
 */
export function logOut(): Object {
    return {
        type: ActionTypes.USER_LOGOUT_REQUEST,
        payload: {}
    };
}

/**
 * Logout
 * @param {Object} payload
 * @returns {Object}
 */
export function register(payload : Object): Object {
    return {
        type: ActionTypes.USER_REGISTER_REQUEST,
        payload
    };
}
