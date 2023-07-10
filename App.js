import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';
import SplashScreen from './src/screen/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga de la aplicación
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <View style={styles.container}>
            <Navigation />
          </View>
        )}
      </NavigationContainer>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 220,
    width: 200,
    alignSelf: 'center',
  },
  image2: {
    height: 150,
    width: 400,
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default App;

