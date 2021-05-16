import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage, { SplashPageRoute } from "../presenters/Splash";
import { Tabs } from './tabs';

const PresentationStack = createStackNavigator<PresentationStack>();

export type PresentationStack = {
    [SplashPageRoute]: {},
    ['tabNavigator']:{}
}

export const MainPresentationRoute = () => {
    return <PresentationRoute/>
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