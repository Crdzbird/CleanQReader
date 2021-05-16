import { QrModel } from "../models/qrModel";

export const UPDATE_QR_LIST = 'UPDATE_QR_LIST';
export const INIT_QR_LIST = 'INIT_QR_LIST';

export interface QrActionType {
  type: string,
  qrData: QrModel | null,
}

export const addQrData = (qrData: QrModel): QrActionType => {
  return {
    type: UPDATE_QR_LIST,
    qrData: qrData,
  };
};


export const initQRData = (): QrActionType => {
  return {
    type: INIT_QR_LIST,
    qrData: null,
  };
};