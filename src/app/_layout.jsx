import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="[id]" 
        options={{ title: 'Retornar', headerTintColor: 'red', headerStyle:{ backgroundColor: '#F7E6CC' }}} 
      />
    </Stack>
  );
}
