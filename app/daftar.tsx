
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import RegisterForm from '../components/RegisterForm';

const DaftarScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1}}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <RegisterForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20, // Memberi sedikit ruang di atas dan bawah
  }
});

export default DaftarScreen;
