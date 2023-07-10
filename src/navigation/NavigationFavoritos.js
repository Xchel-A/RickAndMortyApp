import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Favoritos from '../screen/Favoritos';
import Rickandmorty from '../screen/Rickandmorty';
export default function NavigationFavoritos() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favoritos' component={Favoritos}/>
        <Stack.Screen name='Rickandmorty' component={Rickandmorty}/>
    </Stack.Navigator>
  )
}