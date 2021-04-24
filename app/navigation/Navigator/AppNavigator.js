import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CameraScreen from '../../screens/CameraScreen/CameraScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import RatingScreen from '../../screens/RatingScreen/RatingScreen';

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

            <Stack.Screen 
                name='Rating'
                component={RatingScreen}
            />
        </Stack.Navigator>
    );
}

export default AppNavigator;