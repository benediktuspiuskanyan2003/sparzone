import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';
import PrivateHeader from '../../components/PrivateHeader';

export default function PrivateLayout() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header privat Anda tetap di sini */}
      <PrivateHeader />

      {/* Mengganti Drawer dengan Stack Navigator sederhana */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="my-team" />
        <Stack.Screen name="open-sparring" />
        <Stack.Screen name="futsal-fields" />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
