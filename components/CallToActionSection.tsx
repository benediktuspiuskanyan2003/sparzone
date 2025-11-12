
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const CallToActionSection = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIAP UNTUK BERTANDING?</Text>
      <Text style={styles.subtitle}>
        Bergabunglah dengan ribuan pemain dan tim lainnya. Temukan lawan sparring, pesan lapangan, dan atur pertandingan Anda berikutnya dalam satu platform.
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/daftar')}
      >
        <Text style={styles.buttonText}>GABUNG SEKARANG GRATIS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6A1B9A', // Warna diubah menjadi ungu
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Bebas Neue',
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#F3E5F5', // Warna diubah agar kontras dengan ungu
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: 600,
  },
  button: {
    backgroundColor: '#fff', // Warna tombol tetap putih untuk kontras
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#6A1B9A', // Warna teks tombol disamakan dengan background ungu
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CallToActionSection;
