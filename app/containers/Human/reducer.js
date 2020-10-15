/*
 *
 * Human reducer
 *
 */
import produce from 'immer';
import {
  ADD_HUMAN,
  ADD_HUMAN_ERROR,
  ADD_HUMAN_SUCCESS,
  DELETE_HUMAN,
  DELETE_HUMAN_ERROR,
  DELETE_HUMAN_SUCCESS,
  EDIT_HUMAN,
  EDIT_HUMAN_ERROR,
  EDIT_HUMAN_SUCCESS,
  FETCH_HUMANS,
  FETCH_HUMANS_ERROR,
  FETCH_HUMANS_SUCCESS,
  GO_TO_STEP,
  SELECT_HUMAN,
  SHOW_MODAL,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  success: false,
  humans: {},
  selectedHuman: {},
  modal: false,
  step: 0,
};

/* eslint-disable default-case, no-param-reassign */
const humanReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GO_TO_STEP:
        draft.step = action.step;
        break;
      case SHOW_MODAL:
        draft.modal = action.modal;
        draft.loading = false;
        draft.error = false;
        draft.success = false;
        break;
      case SELECT_HUMAN:
        if (Object.keys(state.humans).length > 0) {
          draft.selectedHuman = state.humans[action.human.id] || {};
        } else {
          draft.selectedHuman = action.human;
        }
        if (draft.selectedHuman.id) {
          draft.step = 1;
        } else {
          draft.step = 0;
        }
        break;
      case FETCH_HUMANS:
      case ADD_HUMAN:
      case EDIT_HUMAN:
      case DELETE_HUMAN:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case FETCH_HUMANS_ERROR:
      case ADD_HUMAN_ERROR:
      case EDIT_HUMAN_ERROR:
      case DELETE_HUMAN_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.success = false;
        break;
      case ADD_HUMAN_SUCCESS:
        draft.modal = false;
        draft.humans[action.response.id] = action.response;
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
      case EDIT_HUMAN_SUCCESS:
        draft.modal = false;
        draft.humans[action.response.id] = action.response;
        draft.selectedHuman = action.response;
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
      case FETCH_HUMANS_SUCCESS:
        draft.humans = action.response;
        if (state.selectedHuman.id)
          draft.selectedHuman =
            action.response[state.selectedHuman.id] ||
            draft.selectedHuman ||
            {};
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
      case DELETE_HUMAN_SUCCESS:
        draft.humans[action.id] = null;
        delete draft.humans[action.id];
        if (action.id === state.selectedHuman.id) {
          draft.selectedHuman = {};
        }
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
    }
  });

export default humanReducer;
