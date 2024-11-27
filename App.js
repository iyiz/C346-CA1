
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddModuleScreen from './src/screens/AddModuleScreen';

const Stack = createStackNavigator(); // Fixed: Correctly initialize the Stack

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GPA Calculator" component={HomeScreen} />
        <Stack.Screen name="Add Module" component={AddModuleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
