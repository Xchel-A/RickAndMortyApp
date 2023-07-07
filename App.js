import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';
Navigation

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </AuthProvider>
  );
}


