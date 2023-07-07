import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function Favoritos() {
  return (
    <SafeAreaView style={{flex:1}}>
        <Text>Favoritos</Text>
    </SafeAreaView>
  )
}

Favoritos.navigationOptions = {
  headerShown: false,
};