import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import { styles } from '../../config/styles';

const PermissionDeniedComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.permissionRejected}>Permission Rejected</Text>
        </SafeAreaView>
    )
}

export default PermissionDeniedComponent;