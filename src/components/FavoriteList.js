import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import FavoriteCard from './FavoriteCard';


const FavoriteList = ({ favoriteData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FavoriteCard data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default FavoriteList;
