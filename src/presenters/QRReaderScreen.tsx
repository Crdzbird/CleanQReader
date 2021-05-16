import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react'
import { Alert, Dimensions } from 'react-native';
import { Animated, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from '../config/styles';
import { HandleBarCodeScanned } from '../core/models/scanModel';
import { addQrData } from '../core/actions/qrAction';
import QRFocusIcon from './components/svgComponent';
import PermissionDeniedComponent from './components/permissionDeniedComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

export const QReaderPageRoute = 'qrReader';
const Animations=require('../config/animators.tsx');


const QRReaderScreen: React.FC = () => {
    const {width: viewportWidth} = Dimensions.get('window');
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
          text: 'Save information',
          onPress: () => {
            saveQRData(data);
            navigation.navigate('qrDetail');
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
    return (hasPermission === false) ?
     (
      <PermissionDeniedComponent/>
    ) :
      (
    <SafeAreaView
      style={styles.container}
    >
        {hasPermission && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={[
            StyleSheet.absoluteFillObject,
            styles.qrContainer,
          ]}
        >
          <SafeAreaView
            onLayout={e => setAnimationLineHeight(e.nativeEvent.layout.height)}
            style={styles.focusedContainer}
          >
            <QRFocusIcon style={{...styles.qrFocusIcon, width: viewportWidth * 0.8, height: viewportWidth * 0.8}} />
            {!scanned && (
              <Animated.View
                style={[
                  styles.animationLineStyle,
                  {
                    transform: [
                      {
                        translateY: focusLineAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [20, animationLineHeight - 40],
                        }),
                      },
                    ],
                  },
                ]}
              />
            )}
          </SafeAreaView>
        </BarCodeScanner>
      )}
    </SafeAreaView>);
}

export default QRReaderScreen;