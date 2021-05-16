import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Colors } from '../config/styles';
import { styles } from '../config/styles';

export const SplashPageRoute = 'splash';

const SplashPage: React.FC = () => {
    const navigation = useNavigation();
    //const dispatch = useDispatch();
    //THIS WILL BE REPLACED WHEN REDUX IS APPLIED.
    useEffect(() => {
        setTimeout(() => navigation.navigate('tabNavigator'), 4 * 1000);
    }, []);
 return (
     <View style={styles.container}>
         <Text style={styles.appTitle}>CleanQReader</Text>
         <ActivityIndicator size='small' color={Colors.primaryText}/>
     </View>
 );   
}

export default SplashPage;