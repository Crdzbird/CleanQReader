import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import { Animated, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { QReaderDetailPageRoute } from "../../presenters/QRDetailScreen";
import { addQrData } from "../actions/qrAction";
import { HandleBarCodeScanned } from "../models/scanModel";

export const useQReader = () => {
    const Animations=require('../../config/animators.tsx');

const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState<boolean>(false);
    const [animationLineHeight, setAnimationLineHeight] = useState(0);
    const navigation = useNavigation();
        const [focusLineAnimation, _] = useState(
        new Animated.Value(0),
    );
    const dispatch = useDispatch();
      useEffect(() => {
    try {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    } catch (_) {
      console.error('No Permission');
    }
    Animations.animateNow(focusLineAnimation);
  }, []);

    const saveQRData = (data: string) => {
    dispatch(addQrData({data: data.trim()}));
  };

  const QRDetected = (data: string) => {
    Alert.alert(
      'QR Code detected',
      `${data}`,
      [
        {
          text: 'Read again',
          onPress: () => setScanned(false),
          style: 'cancel',
        },
        {
          text: 'Register QR',
          onPress: () => {
            saveQRData(data);
            navigation.navigate(QReaderDetailPageRoute);
            setTimeout(() => {
              setScanned(false);
            }, 1000);
          },
        },
      ],
      { cancelable: false },
    );
  };

  const handleBarCodeScanned = ({ data }: HandleBarCodeScanned) => {
    setScanned(true);
    QRDetected(data);
  };

  return {
      handleBarCodeScanned,
      QRDetected,
      saveQRData,
      dispatch,
      hasPermission,
      scanned,
      animationLineHeight,
      focusLineAnimation,
      setAnimationLineHeight,
  }
}