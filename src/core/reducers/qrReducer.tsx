import { QrActionType, INIT_QR_LIST, UPDATE_QR_LIST } from '../actions/qrAction';
import { QrModel } from '../models/qrModel';
import { StateTypes } from './stateTypes';

type QrStateType = StateTypes;

const initState: StateTypes = 
{   qrData: [{data: 'hola'}]}
;

export default (state: QrStateType = initState, action: QrActionType): QrStateType => {
    const { type, qrData } = action;
    console.log("type: " + type);
    switch (type) {
        case INIT_QR_LIST:
            console.log('init');
            console.log(state);
            return {
                ...state,
                qrData: []
            }
            case UPDATE_QR_LIST:
                console.log('update');
                console.log('dat: ' + qrData?.data);
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