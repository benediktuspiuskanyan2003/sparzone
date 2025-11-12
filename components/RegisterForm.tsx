
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabaseClient';

const RegisterForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setLoading(true);

    // Validasi sederhana
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Mohon isi semua field yang wajib diisi.');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password dan konfirmasi password tidak cocok.');
      setLoading(false);
      return;
    }

    // Panggil fungsi sign-up dari Supabase
    const { data: { user }, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        // Data tambahan yang ingin disimpan di tabel 'users' atau 'profiles'
        data: {
          full_name: fullName,
          phone_number: phone,
        }
      }
    });

    if (error) {
      Alert.alert('Registrasi Gagal', error.message);
    } else {
      Alert.alert('Registrasi Berhasil', 'Silakan cek email Anda untuk verifikasi.');
      // Arahkan ke halaman login atau halaman lain setelah sukses
      router.replace('/login');
    }

    setLoading(false);
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Buat Akun Baru</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap *"
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email *"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Telepon (Opsional)"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password *"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Password *"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button title={loading ? 'Mendaftarkan...' : 'Daftar'} onPress={handleRegister} disabled={loading} />

      <TouchableOpacity onPress={() => router.replace('/login')}>
        <Text style={styles.linkText}>Sudah punya akun? Login di sini</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
    marginHorizontal: 30, // Sedikit lebih kecil dari sebelumnya agar tidak terlalu lebar
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 45, // Sedikit lebih tinggi untuk sentuhan yang lebih baik
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  linkText: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default RegisterForm;
