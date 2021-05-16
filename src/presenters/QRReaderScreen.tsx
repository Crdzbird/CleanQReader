import React, { useEffect } from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dimensions } from 'react-native';
import { Animated, Text } from 'react-native';
import { Colors, styles } from '../config/styles';
import QRFocusIcon from './components/svgComponent';
import PermissionDeniedComponent from './components/permissionDeniedComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQReader } from '../core/hooks/useQReader';
import SvgComponent from './components/svgComponent';
import { Appbar } from 'react-native-paper';

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
    <SafeAreaView
      style={{flex:1,
        backgroundColor: Colors.background,}}
    >
        <Appbar style={styles.topAppbar}>
   <Appbar.Content
   title={<Text style={styles.appTitle}>QR Reader</Text>}
    />
  </Appbar>
        {hasPermission && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={{
            ...styles.qrContainer,
            height: viewportHeight,
}}
        >
          <SafeAreaView
            onLayout={e => setAnimationLineHeight(e.nativeEvent.layout.height)}
            style={styles.focusedContainer}
          >
            <Text style={styles.qrTitleScan}>Scan your QR code</Text>
            <SvgComponent style={{...styles.qrFocusIcon, width: viewportWidth * 0.8, height: viewportWidth * 0.8}} />
            {!scanned && (
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