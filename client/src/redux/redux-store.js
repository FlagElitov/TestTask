import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import RouteReducer from "./reducer/routeReducer";
import { sagaWatcher } from "./saga/saga";
const saga = createSagaMiddleware();
const reducers = combineReducers({
  route: RouteReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(saga)));
saga.run(sagaWatcher);
export default store;
