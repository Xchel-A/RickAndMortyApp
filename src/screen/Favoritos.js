import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import { getFavorites } from '../api/FavoritosApi';
import Card from '../components/FavoriteCard';
import AuthContext from '../context/AuthContext';
import pepinillo from '../assets/pepinilloRick.png'
const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const { auth } = useContext(AuthContext);

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

  return (
    <View style={styles.container}>
      {auth ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => <Card character={item} key={item.id} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.textContainer}>
        <Text style={styles.text}>Inicie sesión para guardar personajes Favoritos</Text>
        <Image style={styles.image} source={pepinillo} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  image:{
    width:150,
    height:200,
    marginTop:25
  },
  textContainer:{
    marginTop:150,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default FavoritesScreen;
