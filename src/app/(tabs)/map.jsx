import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, Image } from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import { Link } from 'expo-router';
import { fetchMediaItems } from '../functions/consumir_api';
import { getImageForMediaType } from '../functions/getimage';

export default function MapPage() {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMediaItems(setMediaItems, setLoading, setError);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Erro: {error}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Vi.png')} 
        style={styles.logoStyle}
      />
      <MapView
        initialRegion={{
          latitude: -8.05428,
          longitude: -34.8813,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        {mediaItems.map((item) => (
          <Link key={item.id}   
          href={{
            pathname: '[id]',
            params: {id: item.id}
          }} asChild>
            <Marker
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              title={item.title}
              description={item.media_type}
              image={getImageForMediaType(item.media_type)} // Usando a função para obter a imagem
            />
          </Link>
        ))}
      </MapView>
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
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
  },
  logoStyle: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 100,
    height: 100,
    zIndex: 1,
  },
});
