import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import RickandmortyApi from '../api/RickandmortyApi';
import Rickandmorty from '../screen/Rickandmorty';


export default function NavigationRickandMorty() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen
        name='RickandMortyApi'
        component={RickandmortyApi}
        options={{
            title: '',
            headerTransparent: true
        }}
        />

        <Stack.Screen name='Rickandmorty' component={Rickandmorty}/>
    </Stack.Navigator>
  )
}