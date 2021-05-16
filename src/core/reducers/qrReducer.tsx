import { QrActionType, INIT_QR_LIST, UPDATE_QR_LIST } from '../actions/qrAction';
import { StateTypes } from './stateTypes';

type QrStateType = StateTypes;

const initState: StateTypes = 
{   qrData: [],}
;

export default (state: QrStateType = initState, action: QrActionType): QrStateType => {
    const { type, qrData } = action;
    switch (type) {
        case INIT_QR_LIST:
            return {
                ...state,
                qrData: [],
            }
            case UPDATE_QR_LIST:
                return {
                ...state,
                qrData: [
                    {
                        data: qrData!.data,
                    }
                ],
            }
        default: return state;
    }
};