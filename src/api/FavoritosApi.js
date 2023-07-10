// FavoritosApi.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull, uniqBy } from 'lodash';

export const FAVORITE_STORAGE = 'favorite';

export const getFavorites = async () => {
  try {
    const favoritesString = await AsyncStorage.getItem(FAVORITE_STORAGE);
    if (favoritesString) {
      const favorites = JSON.parse(favoritesString);
      return favorites;
    }
    return [];
  } catch (error) {
    console.log('Error al obtener los favoritos:', error);
    return [];
  }
};

export const isFavorite = (favorites, character) => {
  return favorites.some((favorite) => favorite.id == character.id);
};

export const toggleFavorite = async (character) => {
  try {
    const favoritesString = await AsyncStorage.getItem(FAVORITE_STORAGE);
    let favorites = favoritesString ? JSON.parse(favoritesString) : [];
    if (isFavorite(favorites, character)) {
      favorites = favorites.filter((favorite) => favorite.id !== character.id);
    } else {
      favorites.push(character);
    }
    favorites = uniqBy(favorites, 'id');
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    console.log('Favorito actualizado:', favorites);
  } catch (error) {
    console.log('Error al actualizar el favorito:', error);
  }
};
