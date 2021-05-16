import { StyleSheet } from 'react-native';

export const Colors = {
  background: '#1d1d27',
  primaryText: '#ffffff',
  secondaryText: '#b3b3b3',
  greenText: '#5fe835',
  redText: '#fc5656',
  yellowText: '#e6e643',
  materialBottomTab: '#5077CC',
  materialBottomTabBorder: '#9DA4B3'
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appTitle: {
        fontFamily: 'PoppinsRegular',
        fontSize: 24,
        color: Colors.primaryText,
    }
});