import React from 'react'
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { QrModel } from '../core/models/qrModel';
import { StateTypes } from '../core/reducers/stateTypes';
import { styles } from '../config/styles';

export const QReaderDetailPageRoute = 'qrDetail';

const QRDetailScreen: React.FC = () => {
    const qrList = useSelector((state: StateTypes) => state.qrData);

    const renderQR = ({item}: {item: QrModel}) => {
        return <Text style={{color: 'blue', fontSize: 30}}>{item.data}</Text>;
    };

    if(qrList.length === 0){
        return (<SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/empty.gif')}/>
            <Text style={styles.appTitle}>Empty</Text>
        </SafeAreaView>);
    }
    return (
            <SafeAreaView style={styles.container}>
                <FlatList
                showsHorizontalScrollIndicator={false}
                data={qrList}
                renderItem={renderQR}
                keyExtractor={(qr: QrModel) => qr.data}/>
            </SafeAreaView>)
}

export default QRDetailScreen;