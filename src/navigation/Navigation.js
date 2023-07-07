import { View, Text, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import React from 'react'
import Favoritos from '../screen/Favoritos'
import Rickandmorty from '../screen/Rickandmorty'
import Account from '../screen/Account';
import NavigationFavoritos from './NavigationFavoritos';
import NavigationRickandMorty from './NavigationRickandMorty';


export default function Navigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Account') {
            iconName = focused
              ? 'user-alt'
              : 'user-alt';
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'star' : 'star';
          }

          
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#004DDC',
        inactiveTintColor: 'black',
      }}
    >
        <Tab.Screen 
            name='Account' 
            component={Account}
        />
        <Tab.Screen 
            name='RickandMorty' 
            component={NavigationRickandMorty}
            options={{
                tabBarLabel:"",
                tabBarIcon: () => renderIconRM(),
                
            }}
        />
        <Tab.Screen 
            name='Favoritos' 
            component={NavigationFavoritos}
            options={{
              tabBarLabel:"",
             
          }}
        />
    </Tab.Navigator>
  )
}

const renderIconRM=()=>{
    return(
        <Image
            source={require('../assets/iconoram.png')}
            style={{width:75, height:75, top:-20}}
        />
    )
}