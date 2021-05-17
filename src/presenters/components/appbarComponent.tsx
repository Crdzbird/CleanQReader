import React from 'react';
import { Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { styles } from '../../config/styles';

interface Props {
    title: string,
}

export const AppbarComponent = ({title}: Props) => {
    return (
      <Appbar style={styles.topAppbar}>
        <Appbar.Content title={<Text style={styles.appTitle}>{title}</Text>}/>
      </Appbar>
    );
}