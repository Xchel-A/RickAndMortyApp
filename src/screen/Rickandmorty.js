import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import RickandmortyList from '../components/RickandmortyList'
import RickandmortyApi from '../api/RickandmortyApi'
import Header from '../components/Character/Header'
import Properties from '../components/Character/Properties'


export default function Rickandmorty(props) {
  const {navigation, route:{params}}=props
  const id=params.id
  const img=params.image
  const nom=params.name
  const stat=params.status
  const gen=params.gender
  const spe=params.species
  const typ=params.type
  const ori=params.origin
  const loc=params.location 
  return (
    <SafeAreaView style={styles.container}>
        
        <Header id={id} img={img} nom={nom} />
          <View style={styles.infoContainer}>
            <Properties gen={gen} spe={spe} ori={ori} loc={loc} stat={stat}/>
          </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  safe:{
    
    justifyContent: 'center'

  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#EEE9E8'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})