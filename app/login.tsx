
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { supabase } from '../lib/supabaseClient'; // Pastikan path ini benar

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions(); // Dapatkan lebar layar

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Input Tidak Lengkap', 'Mohon masukkan email dan password Anda.');
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert('Login Gagal', error.message);
    } else {
      // Navigasi akan ditangani oleh AuthProvider dan RootLayout
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tambahkan style kondisional untuk form container */}
      <View style={[styles.content, { maxWidth: width > 768 ? 450 : '100%' }]}>
        <Text style={styles.title}>Login Akun</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Email Anda"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Password Anda"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title={loading ? 'Loading...' : 'Login'} onPress={handleLogin} disabled={loading} />
        <TouchableOpacity onPress={() => router.replace('/daftar')}>
          <Text style={styles.linkText}>Belum punya akun? Daftar di sini</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center', // Pusatkan konten secara vertikal
    alignItems: 'center', // Pusatkan konten secara horizontal
  },
  content: {
    width: '90%', // Gunakan persentase untuk fleksibilitas di mobile
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  linkText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#1e90ff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
