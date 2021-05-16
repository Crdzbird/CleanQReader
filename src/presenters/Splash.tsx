import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../config/styles';
import { styles } from '../config/styles';
import { addQrData, initQRData } from '../core/actions/qrAction';
import { QrModel } from '../core/models/qrModel';

export const SplashPageRoute = 'splash';

const SplashPage: React.FC = () => {

  const dispatch = useDispatch();
    const navigation = useNavigation();
    useEffect(() => {
            dispatch(addQrData({data: 'holis'}));
        setTimeout(() => navigation.navigate('tabNavigator'), 2 * 1000);
    }, [dispatch]);
 return (
     <View style={styles.container}>
         <Text style={styles.appTitle}>CleanQReader</Text>
         <ActivityIndicator size='small' color={Colors.primaryText}/>
     </View>
 );   
}

export default SplashPage;