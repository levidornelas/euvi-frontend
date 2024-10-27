import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; // Para obter o ID da rota
import { fetchMediaItems } from './functions/consumir_api';
import { getImageForMediaType } from './functions/getimage';

export default function Retratos() {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useLocalSearchParams(); // Obtendo o ID da URL

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

  // Encontrando o item pelo ID
  const selectedItem = mediaItems.find((item) => item.id.toString() === id);

  if (!selectedItem) {
    return (
      <View style={styles.container}>
        <Text>Item não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título: {selectedItem.title}</Text>
      <Text style={styles.description}>Tipo de Mídia: {selectedItem.media_type}</Text>
      <Image 
      source={{ uri: selectedItem.image }}
      style={styles.image}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  image:{
    width: 300,
    height: 300, 
    resizeMode: 'cover'
  }
});
