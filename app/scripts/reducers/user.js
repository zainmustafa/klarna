/**
 * @module Reducers/User
 * @desc User Reducer
 */
import immutable from "immutability-helper";
import { createReducer } from "modules/helpers";

import { ActionTypes } from "constants/index";

export const userState = {
    isAuthenticated: false,
    status: "idle",
    isLoading : false,
    userObject : {}
};

export default {
    user: createReducer(userState, {
        [ActionTypes.USER_LOGIN_REQUEST](state) {
            return immutable(state, {
                status: { $set: "running" },
                isLoading: { $set: true }
            });
        },
        [ActionTypes.USER_LOGIN_SUCCESS](state) {
            return immutable(state, {
                status: { $set: "idle" },
                isAuthenticated: { $set: true },
                isLoading: { $set: false }
            });
        },
        [ActionTypes.USER_LOGIN_FAILURE](state) {
            return immutable(state, {
                status: { $set: "idle" },
                isLoading: { $set: false }
            });
        },

        [ActionTypes.USER_REGISTER_REQUEST](state, { payload }) {
            return immutable(state, {
                isLoading: { $set: true },
                userObject :{
                    $set : payload
                }
            });
        },
        [ActionTypes.USER_REGISTER_SUCCESS](state) {
            return immutable(state, {
                isLoading: { $set: false },
                isAuthenticated: { $set: true }
            });
        },
        [ActionTypes.USER_REGISTER_FAILURE](state) {
            return immutable(state, {
                isLoading: { $set: false }
            });
        },



        [ActionTypes.USER_LOGOUT_REQUEST](state) {
            return immutable(state, {
                status: { $set: "running" }
            });
        },
        [ActionTypes.USER_LOGOUT_SUCCESS](state) {
            return immutable(state, {
                status: { $set: "idle" },
                isAuthenticated: { $set: false }
            });
        }
    })
};
