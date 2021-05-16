import React from 'react'
import { StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { useFonts } from "@use-expo/font";
import { Colors } from './src/config/styles';
import { MainPresentationRoute } from './src/router/navigator';

const customFonts = {
  PoppinsBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
  PoppinsLight: require("./src/assets/fonts/Poppins-Light.ttf"),
  PoppinsMedium: require("./src/assets/fonts/Poppins-Medium.ttf"),
  PoppinsRegular: require("./src/assets/fonts/Poppins-Regular.ttf"),
  PoppinsThin: require("./src/assets/fonts/Poppins-Thin.ttf"),
};

const App = () => {
      const [isLoaded] = useFonts(customFonts);
  StatusBar.setBackgroundColor(Colors.background);
  //const store = configureStore();
  return !isLoaded ?
    <View></View> :
    (
     // <Provider store={store}>
        <MainPresentationRoute/>
      //</Provider>
    )
}

export default App;