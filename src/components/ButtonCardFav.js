// Favorito.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome5 } from '@expo/vector-icons';
import { getFavorites, isFavorite, toggleFavorite } from '../api/FavoritosApi';
import { useNavigation } from '@react-navigation/native';

export default function ButtonCardFav({ data }) {
    const [isFavorited, setIsFavorited] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
      const checkFavorite = async () => {
        const favorites = await getFavorites();
        const isCharacterFavorite = isFavorite(favorites, data);
        setIsFavorited(isCharacterFavorite);
      };
      checkFavorite();
    }, [data]);
  
    useEffect(() => {
      // Aquí puedes realizar cualquier acción adicional cuando cambia el estado de isFavorited
      // Por ejemplo, puedes hacer una llamada a una API o ejecutar una animación
      console.log('El estado de isFavorited ha cambiado:', isFavorited);
    }, [isFavorited]);
  
    const addFavorite = async () => {
      try {
        if (isFavorited) {
          await toggleFavorite(data);
        } else {
          await toggleFavorite(data);
        }
        setIsFavorited(!isFavorited);
        navigation.navigate()
      } catch (error) {
        console.log('Error al actualizar el favorito:', error);
      }
    };
  
    const handleAnimationEnd = () => {
      setIsFavorited(isFavorited);
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addFavorite} activeOpacity={0.8}>
        <Animatable.View
          animation={isFavorited ? 'rubberBand' : null}
          iterationCount={1}
          onAnimationEnd={handleAnimationEnd}
        >
          <FontAwesome5
            name="heart"
            solid
            color={isFavorited ? 'red' : 'black'}
            size={30}
            style={styles.icon}
          />
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginRight: 10,
  },
  icon: {
    padding: 10,
  },
});
