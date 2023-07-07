import React, {useContext} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { userDetail, user } from "../../utils/userDb";
import Icono from '../../assets/Logo.png';
import AuthContext from '../../context/AuthContext';
import backgroundImg from '../../assets/backgroundImg.jpg';
export default function UserData({ handleAuthChange }) {
  const { logout,userData  } = useContext(AuthContext);
  const handleLogout = () => {
    //logout desde el context
    logout();
    //console.log('Cerrar sesión');
  };
  
  const username = userData.username;
  const password = userData.password;
  const firstName = userData.firstName;
  const lastName = userData.lastName;
  const email = userData.email;

  //console.log("USER"+userData);
  return (
    <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Icono} style={styles.logo} />
      </View>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Usuario:</Text>
            <Text style={styles.infoValue}>{username}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nombre:</Text>
            <Text style={styles.infoValue}>{firstName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Apellido:</Text>
            <Text style={styles.infoValue}>{lastName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Correo:</Text>
            <Text style={styles.infoValue}>{email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Especie:</Text>
            <Text style={styles.infoValue}>Humano</Text>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Image source={Pie} style={styles.piepag} /> */}
     
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    height:900,
    resizeMode: 'cover',
    marginLeft:-25
    //marginBottom:-100
  },
  container: {
    flex: 0,
    //backgroundColor: '#f2f2f2',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    //backgroundColor: '#fff',
  },
  logo: {
    width: 800,
    height: 300,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
    marginTop: -80,
    marginBottom: 20,
    padding: 20,
    marginLeft:45
  },
  infoContainer: {
    marginTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#69C8ECFF',
    width: 80,
  },
  infoValue: {
    fontSize: 16,
    flex: 1,
  },
  piepag: {
    marginTop: -25,
    marginLeft: 50,
    height: 250,
    width: 300,
    alignSelf: 'center',
  },
  logoutButton: {
    alignSelf: 'center',
    backgroundColor: '#69C8ECFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
