import { all, call, put, takeLatest } from 'redux-saga/effects';
import { initQRData, QrActionTypes } from '../actions/qrAction';

const promiseTimeout = (time: number) => async() => new Promise(resolve => setTimeout(resolve, time, time));

function* delayer() {
    yield promiseTimeout(2000);
}

function* getInitialQrViewModel() {
    yield all([
        call(delayer),
    ]);
    yield put(initQRData());
}

export default function* rootViewModel() {
    yield all([takeLatest(QrActionTypes.INIT_QR_LIST, getInitialQrViewModel)]);
}