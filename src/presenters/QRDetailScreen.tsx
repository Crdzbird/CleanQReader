import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../config/styles';
import { QrModel } from '../core/models/qrModel';
import { StateTypes } from '../core/reducers/stateTypes';

export const QReaderDetailPageRoute = 'qrDetail';

const {width: viewportWidth} = Dimensions.get('window');

const QRDetailScreen: React.FC = () => {
    const qrList = useSelector((state: StateTypes) => state.qrData);
    //const [qrData, setQrData] = useState<Array<QrModel>>(qrList.qrModel.qrData);

    
//   useEffect(() => {
//     setQrData(qrData);
//   }, [qrList]);

    const renderQR = ({item}: {item: QrModel}) => {
        return <Text>{item.data}</Text>;
    };

    if(qrList.length === 0){
        console.log('empty');
        return (<View><Text>Empty</Text></View>);
    }
    return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={[{data: 'hola'}]}
                renderItem={renderQR}
                keyExtractor={(qr: QrModel) => qr.data}/>)
        // <ScrollView>
            {/* {[new QrModel('demo', 'djsjsjs')].map((qr: QrModel) => <Text>{qr.data}</Text>)} */}
            {/* {qrList.qrDataList.length > 0 ? qrList.qrDataList.map((qr: QrModel) => (<Text>{qr.data}</Text>)) : <Text>Empty</Text>} */}
        {/* </ScrollView> */}
    
}

// const QRDetailScreen = () => {
//     return (
//         <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
//             <Text style={{color: 'red'}}>QR Detail SCREEN</Text>
//         </SafeAreaView>
//     )
// }

export default QRDetailScreen;