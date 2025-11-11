import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router'; // << GANTI: Impor useRouter dari expo-router

// Definisi style tetap sama
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  header: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  logo: {
    width: 230,
    height: 70,
    resizeMode: 'contain',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  menuButton: {
    marginLeft: 30,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    cursor: 'pointer',
    transitionDuration: '0.2s',
  },
  menuButtonHover: {
    backgroundColor: '#4A0072',
  },
  menuText: {
    fontSize: 18,
    fontFamily: 'Bebas Neue',
    letterSpacing: 2,
    color: '#4A0072',
  },
  menuTextHover: {
    color: '#FFFFFF',
  },
});

// PERBAIKAN: Tambahkan definisi tipe untuk props
type HeaderButtonProps = {
  text: string;
  onPress: () => void;
};

// Terapkan tipe yang sudah didefinisikan ke props komponen
const HeaderButton = ({ text, onPress }: HeaderButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[styles.menuButton, isHovered && styles.menuButtonHover]}
    >
      <Text style={[styles.menuText, isHovered && styles.menuTextHover]}>
        {text}
      </Text>
    </Pressable>
  );
};

const Header = () => {
  const [fontsLoaded] = useFonts({
    'Bebas Neue': require('../assets/fonts/BebasNeue-Regular.ttf'),
  });
  
  const router = useRouter();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/SparZone.jpg')}
          style={styles.logo}
        />
        <View style={styles.menuContainer}>
          <HeaderButton text="Beranda" onPress={() => router.push('/')} />
          <HeaderButton text="Lapangan" onPress={() => { /* Belum ada aksi */ }} />
          <HeaderButton text="Tim" onPress={() => { /* Belum ada aksi */ }} />
          <HeaderButton text="Daftar" onPress={() => router.push('/register')} />
          <HeaderButton text="Login" onPress={() => router.push('/login')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
