// Card.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import ButtonCardFav from './ButtonCardFav';
import { useNavigation } from '@react-navigation/native'
const FavoriteCard = ({ character }) => {
  const navigation = useNavigation()
    
  //console.log(character);
  const goToPersonaje = ()=>{
      navigation.navigate('Rickandmorty',{
        id: character.id, 
        name:character.name, 
        image:character.image, 
        status:character.status,
        gender:character.gender,
        species:character.species,
        type:character.type,
        origin:character.origin,
        location:character.location
      })

      console.log(`Conoce mas del personaje: '${character.name}'`)
  }
  return (
    <TouchableWithoutFeedback onPress={goToPersonaje}>
    <View style={styles.container} key={character.id}>
      <View style={styles.leftContainer}>
        <Text style={styles.idText}>#{character.id}</Text>
        <Image style={styles.image} source={{ uri: character.image }} />
        
        
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{character.name}</Text>
        <Text style={styles.text}>Species: {character.species}</Text>
        <Text style={styles.text}>Gender: {character.gender}</Text>
        <Text style={styles.text}>Status: {character.status}</Text>
        {/* <Text style={styles.text}>Location: {character.location}</Text> */}
        {/* <Text style={styles.text}>Origin: {character.origin}</Text> */}
      </View>
      <View>
      <ButtonCardFav data={character}/>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  leftContainer: {
    marginRight: 16,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
    marginTop:5
  },
  idText: {
    fontSize: 10,
    color:'#9C27B0'
  },
  rightContainer: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
  },
  title:{
    fontSize:18,
    fontWeight: 'bold',
    marginBottom:15
  }
});

export default FavoriteCard;
