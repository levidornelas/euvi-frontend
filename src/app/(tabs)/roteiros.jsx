import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function MapPage() {
  return (
      <View style={styles.container}>
        <Text>Página de roteiros</Text>
        <Image
          source={require('../../../assets/Vi.png')}
          style={styles.logoStyle}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E6CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 100,
    height: 100,
  },
});
