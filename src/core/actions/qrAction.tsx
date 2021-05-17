import { QrModel } from "../models/qrModel";

export const QrActionTypes = {
  UPDATE_QR_LIST: 'UPDATE_QR_LIST',
  INIT_QR_LIST: 'INIT_QR_LIST',
}

export interface QrActionType {
  type: string,
  qrData: QrModel | null,
}

export const addQrData = (qrData: QrModel): QrActionType => {
  return {
    type: QrActionTypes.UPDATE_QR_LIST,
    qrData: qrData,
  };
};


export const initQRData = (): QrActionType => {
  return {
    type: QrActionTypes.INIT_QR_LIST,
    qrData: null,
  };
};