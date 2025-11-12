
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabaseClient';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert('Login Gagal', error.message);
    } else {
      // PERBAIKAN: Arahkan ke root dari grup (private), yaitu halaman index-nya.
      router.replace('/(private)');
    }
    setLoading(false);
  };

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
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
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: 20,
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    linkText: {
        marginTop: 15,
        color: '#007BFF',
        textAlign: 'center',
    },
});

export default LoginScreen;
