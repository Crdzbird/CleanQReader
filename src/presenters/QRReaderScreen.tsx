import React from 'react'
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const QReaderPageRoute = 'qrReader';

const QRReaderScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
            <Text style={{color: 'white', fontSize: 20}}>QR READER SCREEN</Text>
        </SafeAreaView>
    )
}

export default QRReaderScreen;