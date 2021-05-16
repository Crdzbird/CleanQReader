import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Colors } from "../../config/styles";
import QRDetailScreen from "../../presenters/QRDetailScreen";
import QRReaderScreen from "../../presenters/QRReaderScreen";
import { ParamsType } from "./tabParams";

const BottomTabIOS = createBottomTabNavigator<ParamsType>();

const TabsIos = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
          backgroundColor: 'white'
        }}
        tabBarOptions={{
          activeTintColor: Colors.materialBottomTab,
          style: {
            borderTopColor: Colors.materialBottomTabBorder,
            borderTopWidth: 0,
            elevation: 0,
          },
          labelStyle: {
            fontSize: 15
          }
        }}
        screenOptions={ ({ route }) => ({
          tabBarIcon: ({ color, focused, size }) => {
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
      <BottomTabIOS.Screen name="qrReader" options={{ title: 'QR Reader' }} component={ QRReaderScreen } />
      <BottomTabIOS.Screen name="qrDetail" options={{ title: 'QR Details' }} component={ QRDetailScreen } />
    </BottomTabIOS.Navigator>
  );
    }

    export default TabsIos;