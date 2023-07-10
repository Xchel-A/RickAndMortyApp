// Favorito.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome5 } from '@expo/vector-icons';
import { getFavorites, isFavorite, toggleFavorite } from '../api/FavoritosApi';
import { useIsFocused } from '@react-navigation/native';

export default function Favorito({ data }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const isFocused = useIsFocused();
  useEffect(() => {
    const checkFavorite = async () => {
      const favorites = await getFavorites();
      const isCharacterFavorite = isFavorite(favorites, data);
      setIsFavorited(isCharacterFavorite);
    };

    // Ejecutar checkFavorite cuando la pantalla obtenga el foco
    if (isFocused) {
      checkFavorite();
    }
  }, [data, isFocused]);

  const addFavorite = async () => {
    try {
      if (isFavorited) {
        await toggleFavorite(data);
        //console.log('Eliminar de favoritos:', data);
        console.log(data)
      } else {
        await toggleFavorite(data);
        //console.log('Agregar a favoritos:', data);
      }
      setIsFavorited(!isFavorited);
    } catch (error) {
      console.log('Error al actualizar el favorito:', error);
    }
  };

  const handleAnimationEnd = () => {
    setIsFavorited(isFavorited);
  };
  console.log(isFavorited)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isFavorited ? 'Eliminar de favoritos' : 'Agregar a favoritos'}</Text>

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
