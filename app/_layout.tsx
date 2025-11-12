
import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthProvider";
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Mencegah splash screen hilang secara otomatis
SplashScreen.preventAutoHideAsync();

const RootLayoutNav = () => {
  const { session, loading } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === '(private)';

    // Jika pengguna sudah login dan tidak berada di grup privat,
    // arahkan mereka ke halaman indeks dari grup privat.
    if (session && !inAuthGroup) {
      router.replace('/(private)'); // INI PERBAIKANNYA
    }
    // Jika pengguna belum login dan mencoba masuk ke grup privat,
    // arahkan mereka kembali ke halaman login.
    else if (!session && inAuthGroup) {
      router.replace('/login');
    }
  }, [session, loading, segments]);

  return (
      <Stack screenOptions={{ headerShown: false }}>
        {/* Rute-rute ini berada di level root */}
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="daftar" />
        {/* Ini memberitahu navigator bahwa ada grup rute bernama (private) */}
        <Stack.Screen name="(private)" />
      </Stack>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    ...Ionicons.font,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
