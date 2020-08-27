import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import roadMap from '../../router';

const Stack = createStackNavigator();

const RouterScreen = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen'>
            { roadMap.map((prop,key) => <Stack.Screen name={prop.name} component={prop.component} key={key} />) }
        </Stack.Navigator>
    );
}

export default RouterScreen;