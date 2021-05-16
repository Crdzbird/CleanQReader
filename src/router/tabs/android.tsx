import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { Colors } from "../../config/styles";
import QRDetailScreen from "../../presenters/QRDetailScreen";
import QRReaderScreen from "../../presenters/QRReaderScreen";
import { ParamsType } from "./tabParams";

const BottomTabAndroid = createMaterialBottomTabNavigator<ParamsType>();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: Colors.materialBottomTab
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'] = 'react';
            switch( route.name ) {
              case 'qrReader':
                iconName = 'qrcode-scan'
              break;
              case 'qrDetail':
                iconName = 'details'
              break;
            }
          return <MaterialCommunityIcons name={iconName} size={ 20 } style={{ marginBottom: -3, color: color }}/>
        }
      })}
    >
      <BottomTabAndroid.Screen name="qrReader" options={{ title: 'QR Reader' }} component={ QRReaderScreen } />
      <BottomTabAndroid.Screen name="qrDetail" options={{ title: 'QR Details' }} component={ QRDetailScreen } />
    </BottomTabAndroid.Navigator>
  );
}

export default TabsAndroid;