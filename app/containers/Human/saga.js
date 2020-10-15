import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_HUMAN, DELETE_HUMAN, EDIT_HUMAN, FETCH_HUMANS } from './constants';
import {
  addHumanError,
  addHumanSuccess,
  deleteHumanError,
  deleteHumanSuccess,
  editHumanSuccess,
  fetchHumansError,
  fetchHumansSuccess,
} from './actions';
import { fetchHumans, removeHuman, storeHuman } from './fakeApis';

function* sagaFetchHumans(action) {
  try {
    const { txtSearch = '' } = action;
    const response = yield call(fetchHumans, txtSearch);
    yield put(fetchHumansSuccess(response));
  } catch (error) {
    yield put(fetchHumansError(error));
  }
}

function* sagaAddHuman(action) {
  try {
    const response = yield call(storeHuman, action.data);
    yield put(addHumanSuccess(response));
  } catch (error) {
    yield put(addHumanError(error));
  }
}

function* sagaEditHuman(action) {
  try {
    const response = yield call(storeHuman, action.data);
    yield put(editHumanSuccess(response));
  } catch (error) {
    yield put(editHumanSuccess(error));
  }
}

function* sagaDeleteHuman(action) {
  try {
    yield call(removeHuman, action.id);
    yield put(deleteHumanSuccess(action.id));
  } catch (error) {
    yield put(deleteHumanError(error));
  }
}

export default function* humanSaga() {
  yield takeLatest(FETCH_HUMANS, sagaFetchHumans);
  yield takeLatest(ADD_HUMAN, sagaAddHuman);
  yield takeLatest(EDIT_HUMAN, sagaEditHuman);

  yield takeLatest(DELETE_HUMAN, sagaDeleteHuman);
}
