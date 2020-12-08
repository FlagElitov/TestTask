import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_ROUTE,
  routeLoadingAC,
  routeSuccessAC,
  routeFailAC,
} from "../action/RouteAction";
export function* sagaWatcher() {
  yield takeEvery(REQUEST_ROUTE, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(routeLoadingAC());
    const payload = yield call(axios.get, `http://localhost:3005/api/route`);
    yield put(routeSuccessAC(payload.data));
  } catch (e) {
    yield put(routeFailAC());
  }
}
