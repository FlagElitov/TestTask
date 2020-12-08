import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import RouteReducer from "./reducer/routeReducer";
import { sagaWatcher } from "./saga/saga";
// import PostsReducer from "./reducer/PostReducer";
const saga = createSagaMiddleware();
const reducers = combineReducers({
  route: RouteReducer,
});

const store = createStore(reducers, composeWithDevTools());
saga.run(sagaWatcher);
export default store;
