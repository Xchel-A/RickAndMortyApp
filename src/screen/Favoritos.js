// FavoritesScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { getFavorites } from '../api/FavoritosApi';
import Card from '../components/FavoriteCard';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesData = await getFavorites();
      setFavorites(favoritesData);
    };

    fetchFavorites();
  }, []);

  useEffect(() => {
    const updateFavorites = async () => {
      const updatedFavorites = await getFavorites();
      setFavorites(updatedFavorites);
    };

    // Llamada a la función de actualización cada vez que favorites cambie
    updateFavorites();
  }, [favorites]);
  //console.log(favorites)
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Card character={item} key={item.id}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
});

export default FavoritesScreen;
