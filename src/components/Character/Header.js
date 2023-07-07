import { View, Text,Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Imagen({id,nom,img}) {


    
  return (
    <View style={styles.headerContent}>
      <Image style={styles.image} source={{uri: img}}/>
      <Text style={styles.textName}><Text style={styles.idText}>ID: #{id} </Text> {nom}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    headerContent:{
        flex:.75,
        justifyContent:'center',
    },
    textName:{
        textAlign:'center',
        fontSize:32,
        fontWeight:'bold'
    },
    image:{
        width:200,
        height:200,
        borderRadius:100,
        borderColor:'#000',
        alignSelf:'center',

      },
    idText:{
      fontSize:12,
      color:'gray',
    }  
})