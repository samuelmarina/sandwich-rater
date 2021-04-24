import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import CameraScreen from '../../screens/CameraScreen/CameraScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
            />

            <Stack.Screen 
                name='Camera'
                component={CameraScreen}
            />
        </Stack.Navigator>
    );
}

export default AppNavigator;