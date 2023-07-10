import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { getFavorites } from "../api/FavoritosApi";
import Card from "../components/FavoriteCard";
import AuthContext from "../context/AuthContext";
import pepinillo from "../assets/pepinilloRick.png";
import { useNavigation } from "@react-navigation/native";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const { auth } = useContext(AuthContext);
  const navigation = useNavigation();

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
          <Text style={styles.text}>
            Inicie sesión para guardar personajes Favoritos
          </Text>
          <Image style={styles.image} source={pepinillo} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Account")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: "80%",
    height: 40,
    backgroundColor: "#69C8ECFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "gray",
  },
  image: {
    width: 150,
    height: 200,
    marginTop: 25,
  },
  textContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
