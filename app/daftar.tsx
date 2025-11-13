
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { supabase } from '../lib/supabaseClient'; // Pastikan path ini benar

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimensions(); // Dapatkan lebar layar

  const handleRegister = async () => {
    if (!fullName || !email || !password) {
        Alert.alert('Input Tidak Lengkap', 'Mohon isi semua kolom yang tersedia.');
        return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    });

    if (error) {
      Alert.alert('Pendaftaran Gagal', error.message);
    } else {
      Alert.alert('Pendaftaran Berhasil', 'Silakan cek email Anda untuk verifikasi.');
      router.replace('/login'); // Arahkan ke halaman login setelah berhasil
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
        {/* Tambahkan style kondisional untuk form container */}
        <View style={[styles.content, { maxWidth: width > 768 ? 450 : '100%' }]}>
            <Text style={styles.title}>Buat Akun Baru</Text>
            <TextInput
                style={styles.input}
                placeholder="Nama Lengkap Anda"
                value={fullName}
                onChangeText={setFullName}
            />
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
                placeholder="Buat Password Anda"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title={loading ? 'Mendaftar...' : 'Daftar'} onPress={handleRegister} disabled={loading} />
            <TouchableOpacity onPress={() => router.replace('/login')}>
                <Text style={styles.linkText}>Sudah punya akun? Login di sini</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '90%',
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

export default RegisterScreen;
