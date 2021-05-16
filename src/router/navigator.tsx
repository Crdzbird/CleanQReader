import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage, { SplashPageRoute } from "../presenters/Splash";
import { Platform } from 'react-native';
import { Colors } from '../config/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QRDetailScreen, QReaderDetailPageRoute } from '../presenters/QRDetailScreen';
import { QReaderPageRoute, QRReaderScreen } from '../presenters/QRReaderScreen';

const BottomTabAndroid = createMaterialBottomTabNavigator<ParamsType>();
const BottomTabIOS = createBottomTabNavigator();
const PresentationStack = createStackNavigator<PresentationStack>();

export type ParamsType = {
    [QReaderDetailPageRoute]: {},
    [QReaderPageRoute]: {}
}

export type PresentationStack = {
    [SplashPageRoute]: {},
    ['tabNavigator']:{}
}

export const Tabs = () => {
  return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />
}

export const MainPresentationRoute = () => {
    return <PresentationRoute/>
}

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

const TabsIOS = () => {
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
      <BottomTabAndroid.Screen name="qrReader" options={{ title: 'QR Reader' }} component={ QRReaderScreen } />
      <BottomTabAndroid.Screen name="qrDetail" options={{ title: 'QR Details' }} component={ QRDetailScreen } />
    </BottomTabIOS.Navigator>
  );
    }

    const PresentationRoute = () => {
    return (
        <NavigationContainer>
            <PresentationStack.Navigator initialRouteName={SplashPageRoute} headerMode='none'>
                <PresentationStack.Screen name={SplashPageRoute} component={SplashPage}/>
                <PresentationStack.Screen name={'tabNavigator'} component={Tabs}/>
            </PresentationStack.Navigator>
        </NavigationContainer>
    );
}