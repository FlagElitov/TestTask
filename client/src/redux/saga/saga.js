import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_ROUTE,
  routeLoading,
  routeSuccess,
  routeFail,
} from "../action/RouteAction";
export function* sagaWatcher() {
  yield takeEvery(REQUEST_ROUTE, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(routeLoading());
    const payload = yield call(axios.get, `http://localhost:3005/products`);
    yield put(routeSuccess(payload.data));
  } catch (e) {
    yield put(routeFail());
  }
}
