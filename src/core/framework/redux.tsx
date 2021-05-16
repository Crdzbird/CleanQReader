import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "redux-saga";
import qrReducer from "../reducers/qrReducer";
import rootVM from "../viewModel";

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(qrReducer,
    applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootVM);
    return store;
}