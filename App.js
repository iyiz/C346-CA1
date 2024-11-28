import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the calculator icon
import HomeScreen from './src/screens/HomeScreen';
import AddModuleScreen from './src/screens/AddModuleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GPA Calculator"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Icon name="calculator" size={24} color="#4C8BF5" style={styles.icon} />
                <Text style={styles.headerText}>GPA Calculator</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen name="Add Module" component={AddModuleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8, // Space between icon and text
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
