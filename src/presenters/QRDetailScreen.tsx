import React from 'react'
import { Text, View, Image, Button, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { QrModel } from '../core/models/qrModel';
import { StateTypes } from '../core/reducers/stateTypes';
import { styles } from '../config/styles';
import { Card, CardContent, CardTitle } from './components/cardComponent';

export const QReaderDetailPageRoute = 'qrDetail';

const QRDetailScreen: React.FC = () => {
    const qrList = useSelector((state: StateTypes) => state.qrData);
    const {width: viewportWidth} = Dimensions.get('window');

    const qrCard = ({item}: {item: QrModel}) => {
        return (
            <Card width={viewportWidth * 0.8} height={150}>
            <CardTitle>
              <Text style={styles.cardTitle}>{item.data}</Text>
            </CardTitle>
            <CardContent>
              <Text>{item.data}</Text>
            </CardContent>
          </Card>
        );
    }
    console.log(qrList.length);
    return (qrList.length === 0) ?
         (<SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/empty.gif')}/>
            <Text style={styles.appTitle}>No QR Scanned</Text>
        </SafeAreaView>)
    :(
            <SafeAreaView style={styles.container}>
                <FlatList
                showsHorizontalScrollIndicator={false}
                data={qrList}
                renderItem={qrCard}
                keyExtractor={(qr: QrModel) => qr.data}/>
            </SafeAreaView>);
}

export default QRDetailScreen;