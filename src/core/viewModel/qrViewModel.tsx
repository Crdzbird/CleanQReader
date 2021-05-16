import { all, call, put, takeLatest } from 'redux-saga/effects';
import { initQRData, QrActionType, UPDATE_QR_LIST, INIT_QR_LIST } from '../actions/qrAction';

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
    yield all([takeLatest('INIT_QR_LIST', getInitialQrViewModel)]);
}