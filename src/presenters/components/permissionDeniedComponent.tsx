import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import { styles } from '../../config/styles';
import '../../i18n/translation';
import i18nInstance from '../../i18n/translation';

const PermissionDeniedComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.permissionRejected}>{i18nInstance.t('Permission Rejected')}</Text>
        </SafeAreaView>
    )
}

export default PermissionDeniedComponent;