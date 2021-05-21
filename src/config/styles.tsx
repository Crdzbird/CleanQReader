import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export const Colors = {
  background: '#1d1d27',
  cardBackground: '#468515',
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
    itemQRIcon: {
      padding: 5,
      marginTop: 5,
      marginRight: 15,
      backgroundColor: Colors.secondaryText,
      borderRadius: 7,
    },
    safeAreaContainer: {
      flex:1,
      backgroundColor: Colors.background,
    },

    itemQRInfo: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    itemType: {
      fontSize: 16,
      fontFamily: 'PoppinsBold',
      color: Colors.primaryText,
      paddingBottom: 2,
    },
    itemData: {
      color: Colors.primaryText,
      fontFamily: 'PoppinsRegular',
    },
  topAppbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    elevation: 7,
    backgroundColor: Colors.materialBottomTab,
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
  qrTitleScan: {
    fontFamily: 'PoppinsRegular',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
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
      height: 17,
      width: '55%',
      backgroundColor: Colors.secondaryText,
      position: 'absolute',
      borderRadius: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
});