import { QrActionType, QrActionTypes } from '../actions/qrAction';
import { StateTypes } from './stateTypes';

type QrStateType = StateTypes;

const initState: StateTypes = {
    qrData: [],
};

export default (state: QrStateType = initState, action: QrActionType): QrStateType => {
    const { type, qrData } = action;
    switch (type) {
        case QrActionTypes.INIT_QR_LIST:
            return {
                ...state,
                qrData: [],
            }
            case QrActionTypes.UPDATE_QR_LIST:
                return {
                ...state,
                qrData: [
                    ...state.qrData,
                    {
                        data: qrData!.data,
                    }
                ],
            }
        default: return state;
    }
};