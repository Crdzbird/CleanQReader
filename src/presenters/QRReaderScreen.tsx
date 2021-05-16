import React from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dimensions } from 'react-native';
import { Animated } from 'react-native';
import { styles } from '../config/styles';
import QRFocusIcon from './components/svgComponent';
import PermissionDeniedComponent from './components/permissionDeniedComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQReader } from '../core/hooks/useQReader';

export const QReaderPageRoute = 'qrReader';

const QRReaderScreen: React.FC = () => {
    const {
    QRDetected,
    animationLineHeight,
    dispatch,
    focusLineAnimation,
    handleBarCodeScanned,
    hasPermission,
    saveQRData,
    scanned,
    setAnimationLineHeight,
  } = useQReader();

    const {width: viewportWidth} = Dimensions.get('window');
    
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