import React, { useEffect } from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dimensions, StatusBar } from 'react-native';
import { Animated, Text } from 'react-native';
import { styles } from '../config/styles';
import PermissionDeniedComponent from './components/permissionDeniedComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQReader } from '../core/hooks/useQReader';
import SvgComponent from './components/svgComponent';
import { AppbarComponent } from './components/appbarComponent';
import '../i18n/translation';
import i18nInstance from '../i18n/translation';

export const QReaderPageRoute = 'qrReader';

const QRReaderScreen: React.FC = () => {
    const {
    animationLineHeight,
    focusLineAnimation,
    handleBarCodeScanned,
    hasPermission,
    scanned,
    navigation,
    setAnimationLineHeight,
  } = useQReader();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'QR Reader',
    });
  }, []);

    const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
    return (hasPermission === false) ?
     (
      <PermissionDeniedComponent/>
    ) :
      (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <AppbarComponent title='QR Reader'/>
        {hasPermission && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={{
            ...styles.qrContainer,
            height: viewportHeight,}}
        >
          <SafeAreaView
            onLayout={e => setAnimationLineHeight(e.nativeEvent.layout.height)}
            style={styles.focusedContainer}>
            <Text style={styles.qrTitleScan}>{i18nInstance.t('Scan your QR code')}</Text>
            <SvgComponent style={{...styles.qrFocusIcon, width: viewportWidth * 0.8, height: viewportWidth * 0.8}} />
            {(
              <Animated.View
                style={[
                  styles.animationLineStyle,
                  {
                    transform: [
                      {
                        translateY: focusLineAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [120, animationLineHeight - 40],
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