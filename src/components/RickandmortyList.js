import { View, Text, SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import RickandmortyCard from './RickandmortyCard'


export default function RickandmortyList(props) {
    const {characters} = props
    const {nextUrl} = props
    const {loadMoreData} =props
   
    const loadMore=()=>{
        console.log('Cargando personajes')
        loadMoreData()
    }
 
  return (
    <SafeAreaView style={styles.list}>
        <FlatList 
            data={characters}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(characters)=>String(characters.id)}
            renderItem={({item})=><RickandmortyCard characters={item}/>}
            contentContainerStyle={styles.container}
            onEndReachedThreshold={0.1}
            onEndReached={nextUrl&&loadMore}
            ListFooterComponent={
               nextUrl && <ActivityIndicator size="large" color="#A4A4A4"/>
            }
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15
    },
    list:{
        paddingTop: Platform.OS === 'android' ? 30 : 0
    }
})