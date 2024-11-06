import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
});

  return (
    <View style={styles.container}>
    <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
    <Animated.Image
      source={require('../../assets/Vi.png')}
      style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
    />
    <Animated.Text style={[styles.text, { transform: [{ scale: scaleAnim }] }]}>
      Seja Bem-vindo(a) ao EU VI Recife!
    </Animated.Text>

    <Link href="/map" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>EXPLORAR</Text>
      </TouchableOpacity>
    </Link>
  </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E6CC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: '#04C5A4',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E7D2C0',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
