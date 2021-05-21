import React from 'react'
import { Text, Image, Dimensions, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { QrModel } from '../core/models/qrModel';
import { StateTypes } from '../core/reducers/stateTypes';
import { Colors, styles } from '../config/styles';
import { Card, CardContent } from './components/cardComponent';
import { AppbarComponent } from './components/appbarComponent';
import { checkQRType } from './qr-types';
import { useCardDetail } from '../core/hooks/useCardDetail';
import '../i18n/translation';
import i18nInstance from '../i18n/translation';

export const QReaderDetailPageRoute = 'qrDetail';

const QRDetailScreen: React.FC = () => {
    const {
      notifyMessage,
      onTap,
      QRIcon,
    } = useCardDetail();
    const qrList = useSelector((state: StateTypes) => state.qrData);
    const {width: viewportWidth} = Dimensions.get('window');

    const qrCard = ({item}: {item: QrModel}) => {
        return (
          <TouchableOpacity onPress={() => onTap(checkQRType(item.data).dataType, item.data)}>
            <Card width={viewportWidth * 0.8} styles={styles.safeAreaContainer}>
            <CardContent>
              <QRIcon
                      name={checkQRType(item.data).icon}
                      color={Colors.greenText}
                    />
              <View style={styles.itemQRInfo}>
                      <Text style={styles.itemType}>
                        {checkQRType(item.data).dataType}
                      </Text>
                      <Text style={styles.itemData}>
                        {item.data}
                      </Text>
                    </View>
            </CardContent>
          </Card>
      </TouchableOpacity>
        );
    }
    return (qrList.length === 0) ?
         (<SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
                <AppbarComponent title='QR Details'/>
            <Image source={require('../assets/images/empty.gif')}/>
            <Text style={styles.appTitle}>{i18nInstance.t('No QR Scanned')}</Text>
        </SafeAreaView>)
    :(
            <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
                <AppbarComponent title='QR Details'/>
                <FlatList style={{paddingTop: 65}}
                showsHorizontalScrollIndicator={false}
                data={qrList}
                renderItem={qrCard}
                keyExtractor={(qr: QrModel) => qr.data}/>
            </SafeAreaView>);
}

export default QRDetailScreen;