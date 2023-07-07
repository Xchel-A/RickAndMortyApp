import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { userDetail, user } from "../../utils/userDb";
import Icono from '../../assets/Logo.png';
export default function UserData() {
  return (
    <View style={styles.card}>
        <Image source={Icono} style={styles.image} />
        <View style={styles.cardContent}>
            <View style={styles.infoView}><Text style={styles.infoText}>Usuario: </Text><Text style={styles.infoCharacter}>{user.username}</Text></View>
            <View style={styles.infoView}><Text style={styles.infoText}>Nombre: </Text><Text style={styles.infoCharacter}>{userDetail.fristName}</Text></View>
            <View style={styles.infoView}><Text style={styles.infoText}>Apellido: </Text><Text style={styles.infoCharacter}>{userDetail.lastName}</Text></View>
            <View style={styles.infoView}><Text style={styles.infoText}>Correo: </Text><Text style={styles.infoCharacter}>{userDetail.email}</Text></View>
            <View style={styles.infoView}><Text style={styles.infoText}>Especie: </Text><Text style={styles.infoCharacter}>Humano</Text></View>   
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      shadowColor: '#000',
      width:370,
      height:580,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardContent: {
      padding: 20,
      alignItems: 'center',
    },
    image: {
      
      width: 340,
      height: 150,
     
    },
    label: {
      fontWeight: 'bold',
      fontSize: 22,
      marginBottom: 5,
    },
    text: {
      fontSize: 20,
      marginBottom: 10,
    },
    infoContainer:{
      alignContent:'center',
    },
    propTitle:{
      fontSize:20,
      color:'gray',
      textAlign:'center'
    },
    infoView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:35,
      marginBottom:15
    },
    infoText:{
      fontWeight:'bold',
      fontSize:18,
      backgroundColor:"#69C8ECFF",
      borderRadius:8,
      textAlign:'center',
      padding:2,
      width:100,
      marginRight:10,
    },
    infoCharacter:{
      fontSize:16,
      backgroundColor:"#B7E4F9FF",
      borderRadius:8,
      textAlign:'center',
      padding:2,
      width:240,
    }
  });
  