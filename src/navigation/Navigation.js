import { View, Text, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import React, {useState, useEffect} from 'react'
import Favoritos from '../screen/Favoritos'
import Rickandmorty from '../screen/Rickandmorty'
import Account from '../screen/Account';
import NavigationFavoritos from './NavigationFavoritos';
import NavigationRickandMorty from './NavigationRickandMorty';
import { getFavorites } from '../api/FavoritosApi';


export default function Navigation() {
    const Tab = createBottomTabNavigator();
    const [favoriteCount, setFavoriteCount] = useState(0);
    const fetchFavorites = async () => {
      const favoritesData = await getFavorites();
      setFavoriteCount(favoritesData.length);
    };
    const updateFavorites = async () => {
      const favoritesData = await getFavorites();
      setFavoriteCount(favoritesData.length);
    };
   
    useEffect(() => {
      fetchFavorites();
    }, []);
    useEffect(() => {
      updateFavorites();
    }, []);
    
    useEffect(() => {
      const interval = setInterval(() => {
        updateFavorites();
      }, 500);
    
      return () => {
        clearInterval(interval);
      };
    }, []);
    

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Account') {
            iconName = focused
              ? 'user-tie'
              : 'user-tie';
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'heart' : 'heart';
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
          options={{
            tabBarLabel: "", // Establecer tabBarLabel como una cadena vacía
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = focused ? 'user-tie' : 'user-tie';
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          }}
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
          tabBarIcon: ({ color, size }) => (
            <View>
              <FontAwesome5 name="heart" size={size} color={color} solid/>
              {favoriteCount > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    top: -5,
                    right: -8,
                    minWidth: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
            <Text style={{ color: 'white', fontSize: 10 }}>
              {favoriteCount}
            </Text>
          </View>
        )}
      </View>
    ),
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