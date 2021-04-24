import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';

import AppNavigator from './app/navigation/Navigator/AppNavigator';
import Context from "./app/config/context/context";
import { useFonts, BlackHanSans_400Regular } from '@expo-google-fonts/black-han-sans';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  let [fontsLoaded, error] = useFonts({
    BlackHanSans_400Regular,
  });

  const [hasPermission, setHasPermission] = useState(null);

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Context.Provider value={{ hasPermission, setHasPermission }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Context.Provider>
  );
}
