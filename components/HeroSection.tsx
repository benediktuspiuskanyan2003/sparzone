
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from 'expo-font';

const HeroSection = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'Bebas Neue': require('../assets/fonts/BebasNeue-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../assets/images/futsal-main.png')}
      style={styles.heroSection}
      // Menggunakan 'cover' sebagai dasar, lalu 'scale' untuk kontrol manual
      imageStyle={{ transform: [{scale: 1.2}] }} 
      resizeMode="cover" 
    >
      <View style={styles.overlay}>
        <Text style={styles.heroTitle}>SELAMAT DATANG DI SPARZONE</Text>
        <Text style={styles.heroSubtitle}>
          Cari Lawan Sparring dengan Lebih Mudah di Kota Anda
        </Text>
        <Pressable style={styles.heroButton} onPress={() => router.push('/')}>
          <Text style={styles.heroButtonText}>Lihat Tim di Kota Anda</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    height: 550,
    width: '100%',
    backgroundColor: '#000', 
    justifyContent: 'center',
    alignItems: 'center',
    // Menambahkan overflow hidden untuk memastikan gambar tidak keluar dari batas
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Bebas Neue',
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  heroButton: {
    backgroundColor: '#4A0072',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HeroSection;
