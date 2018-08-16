/**
 * @module Reducers/NetFlix
 * @desc NetFlix Reducer
 */
import immutable from "immutability-helper";
import { createReducer } from "modules/helpers";
// import { parseError } from "modules/client";

import { ActionTypes } from "constants/index";

export const netflixState = {
    playlist: [],
    isLoading : false,
    playListCount : 0
};

export default {
    netflix: createReducer(netflixState, {
        [ActionTypes.ADD_TO_PLAYLIST_REQUEST](state) {
            return immutable(state, {
                isLoading: { $set: true }
            });
        },
        [ActionTypes.ADD_TO_PLAYLIST_SUCCESS](state, { payload }) {
            return immutable(state, {
                playlist: { $set: payload.arr },
                isLoading: { $set: false },
                playListCount: { $set: payload.length }
            });
        },
        [ActionTypes.ADD_TO_PLAYLIST_FAILURE](state) {
            return immutable(state, {
                isLoading: { $set: true }
            });
        }
    })
};
