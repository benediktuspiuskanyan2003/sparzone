
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthProvider';

const HomeScreen = () => {
  const { user } = useAuth(); // Dapatkan data pengguna

  // KOMPONEN <PrivateHeader /> DAN IMPORT-NYA TELAH DIHAPUS
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>Selamat Datang!</Text>
        <Text style={styles.emailText}>Anda login sebagai: {user?.email}</Text>
        
        {/* Konten dashboard lainnya bisa ditambahkan di sini */}
        <Text style={styles.placeholder}>Konten Dashboard Anda akan muncul di sini.</Text>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  emailText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
  },
  placeholder: {
      fontSize: 18,
      color: '#888',
      textAlign: 'center',
      lineHeight: 25,
  }
});

export default HomeScreen;
