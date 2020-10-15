/*
 *
 * Human actions
 *
 */

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

export function gotoStep(step = 0) {
  return {
    type: GO_TO_STEP,
    step,
  };
}

export function showModal(modal = false) {
  return {
    type: SHOW_MODAL,
    modal,
  };
}

export function fetchHumans(txtSearch = '') {
  return {
    type: FETCH_HUMANS,
    txtSearch,
  };
}

export function fetchHumansSuccess(response) {
  return {
    type: FETCH_HUMANS_SUCCESS,
    response,
  };
}

export function fetchHumansError(error) {
  return {
    type: FETCH_HUMANS_ERROR,
    error,
  };
}

export function selectHuman(human) {
  return {
    type: SELECT_HUMAN,
    human,
  };
}

export function addHuman(data) {
  return {
    type: ADD_HUMAN,
    data,
  };
}

export function addHumanSuccess(response) {
  return {
    type: ADD_HUMAN_SUCCESS,
    response,
  };
}

export function addHumanError(error) {
  return {
    type: ADD_HUMAN_ERROR,
    error,
  };
}

export function editHuman(data) {
  return {
    type: EDIT_HUMAN,
    data,
  };
}

export function editHumanSuccess(response) {
  return {
    type: EDIT_HUMAN_SUCCESS,
    response,
  };
}

export function editHumanError(error) {
  return {
    type: EDIT_HUMAN_ERROR,
    error,
  };
}

export function deleteHuman(id) {
  return {
    type: DELETE_HUMAN,
    id,
  };
}

export function deleteHumanSuccess(id) {
  return {
    type: DELETE_HUMAN_SUCCESS,
    id,
  };
}

export function deleteHumanError(error) {
  return {
    type: DELETE_HUMAN_ERROR,
    error,
  };
}
