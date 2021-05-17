import { applyMiddleware, createStore, compose } from "redux"
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import qrReducer from "../reducers/qrReducer";
import rootVM from "../viewModel";

export const configureStore = () => {
    const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, thunk];
    const store = createStore(qrReducer,
    composeEnhancers(applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootVM);
    return store;
}