import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStarted, HomeScreen, ImageDetails } from './src/screens';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="GetStarted" component={GetStarted}  />
        <Stack.Screen name="ImageDetails" component={ImageDetails}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}