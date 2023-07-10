import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const SplashScreen = () => {
  const [loadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga de la aplicación
    setTimeout(() => {
      setLoadingVisible(false);
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/SplashScreen.jpg')}
      style={styles.container}
      resizeMode="contain"
    >
      <Spinner visible={loadingVisible} />

      {/* Contenido adicional para el Splash Screen */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
