import {all} from 'redux-saga/effects';
import rootViewModel from './qrViewModel';

export * from './qrViewModel';

export default function* rootVM() {
  yield all([rootViewModel()]);
}
