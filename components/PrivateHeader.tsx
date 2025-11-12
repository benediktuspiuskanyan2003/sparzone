
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

const PrivateHeader = () => {
  const navigation = useNavigation();

  // Fungsi untuk membuka drawer/sidebar
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <View style={styles.headerContainer}>
      {/* Tampilkan tombol menu hanya di platform native (iOS/Android) */}
      {Platform.OS !== 'web' && (
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Ionicons name="menu-outline" size={32} color="#333" />
        </TouchableOpacity>
      )}
      
      {/* Judul Aplikasi */}
      <Text style={styles.headerTitle}>Sparzone</Text>
      
      {/* Placeholder kosong di sebelah kanan untuk menjaga judul tetap di tengah */}
      <View style={styles.rightPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuButton: {
    padding: 5,
  },
  rightPlaceholder: {
    // Lebar dibuat sama dengan tombol menu agar judul seimbang
    width: Platform.OS !== 'web' ? 32+10 : 0,
  }
});

export default PrivateHeader;
