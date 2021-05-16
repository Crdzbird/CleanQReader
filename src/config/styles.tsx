import { Animated, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


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
    qrContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'transparent',
      padding: 0,
      borderWidth: 0,
            ...StyleSheet.absoluteFillObject,
    },
    permissionRejected: {
        fontSize: 20, 
        color: 'blue',
    },
    appTitle: {
        fontFamily: 'PoppinsRegular',
        fontSize: 24,
        color: Colors.primaryText,
    },
    cardTitle: {
        fontFamily: 'PoppinsRegular',
        fontSize: 24,
        color: 'black',
    },
    focusedContainer: {
      backgroundColor: 'transparent',
      position: 'relative',
      alignItems: 'center',
    },

    qrFocusIcon: {
      marginTop: 0,
      marginBottom: 0,
    },
    animationLineStyle: {
      height: 20,
      width: '55%',
      backgroundColor: 'rgba(254,125,85,0.4)',
      position: 'absolute',
      borderRadius: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
});