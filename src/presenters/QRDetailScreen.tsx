import React from 'react'
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const QReaderDetailPageRoute = 'qrDetail';

const QRDetailScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
            <Text style={{color: 'red'}}>QR Detail SCREEN</Text>
        </SafeAreaView>
    )
}

export default QRDetailScreen;