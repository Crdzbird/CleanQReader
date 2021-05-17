import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import { Colors } from '../config/styles';
import { styles } from '../config/styles';

export const SplashPageRoute = 'splash';

const SplashPage: React.FC = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => navigation.navigate('tabNavigator'), 2 * 1000);
    }, []);
 return (
     <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
         <Text style={styles.appTitle}>CleanQReader</Text>
         <ActivityIndicator size='small' color={Colors.primaryText}/>
     </View>
 );   
}

export default SplashPage;