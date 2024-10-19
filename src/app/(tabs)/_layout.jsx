import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'red', tabBarActiveBackgroundColor: '#E7D2C0', tabBarInactiveBackgroundColor: '#E7D2C0' }}>
      <Tabs.Screen
        name="map"
        options={{
          title: 'Mapa',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="map-legend" color={color} />,
          headerShown: false, 
        }}
      />
      <Tabs.Screen
        name="roteiros"
        options={{
          title: 'Roteiros',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="car-wireless" size={24} color={color} />,
          headerShown: false, 
        }}
      />
      <Tabs.Screen
        name="busca"
        options={{
          title: 'Buscas',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="map-search" size={24} color={color} />,
          headerShown: false, // Adicionando headerShown como false
        }}
      />
      <Tabs.Screen
        name="contato"
        options={{
          title: 'Contato',
          tabBarIcon: ({ color }) => <Feather name="phone-call" size={24} color={color} />,
          headerShown: false, // Adicionando headerShown como false
        }}
      />
    </Tabs>
  );
}
