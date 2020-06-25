import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import backgroundImg from '../assets/spashbackground.jpg';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home")
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>kindle-like</Text>
      <Image source={backgroundImg} style={styles.backgroundImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    color: '#fff',
    position:"relative"
  },
  text: {
    position: "absolute",
    zIndex: 1,
    top: '10%',
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    // position: "relative",
    resizeMode: 'contain', // or 'stretch'
  }
});

export default SplashScreen
