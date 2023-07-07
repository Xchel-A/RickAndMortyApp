import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
//import Account from '../screen/Account';
import LoginForm from '../components/Auth/LoginForm';
import Navigation from './Navigation';
export default function NavigationAccount() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginForm} options={{ title: "Iniciar Sesión" }} />

        <Stack.Screen name='Home' component={Navigation} options={{title:"Rick and Morty"}}/>
    </Stack.Navigator>
  )
}