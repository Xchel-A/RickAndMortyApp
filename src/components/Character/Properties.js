import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Properties({gen, spe, typ, ori, loc, stat}) {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoView}><Text style={styles.infoText}>Estatus: </Text><Text style={styles.infoCharacter}>{stat}</Text></View>
      <View style={styles.infoView}><Text style={styles.infoText}>Genero: </Text><Text style={styles.infoCharacter}>{gen}</Text></View>
      <View style={styles.infoView}><Text style={styles.infoText}>Especie: </Text><Text style={styles.infoCharacter}>{spe}</Text></View>
      <View style={styles.infoView}><Text style={styles.infoText}>Origen: </Text><Text style={styles.infoCharacter}>{ori}</Text></View>
      <View style={styles.infoView}><Text style={styles.infoText}>Ubicacion: </Text><Text style={styles.infoCharacter}>{loc}</Text></View>      
    </View>
  )
}

const styles=StyleSheet.create({
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
})