
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text, Pressable, useWindowDimensions, Modal, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Definisikan tipe props untuk Header, termasuk fungsi scroll
interface HeaderProps {
  onScrollToFeatures?: () => void;
  onScrollToTeams?: () => void;
  onScrollToFields?: () => void;
}

type HeaderButtonProps = { text: string; onPress: () => void; };
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

// Terima props baru di komponen Header
const Header: React.FC<HeaderProps> = ({ onScrollToFeatures, onScrollToTeams, onScrollToFields }) => {
  const [fontsLoaded] = useFonts({ 'Bebas Neue': require('../assets/fonts/BebasNeue-Regular.ttf'), });
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!fontsLoaded) { return null; }

  const isMobile = width < 768;

  // Hubungkan tombol ke fungsi scroll dari props
  const menuItems = [
    { text: "Beranda", action: () => router.push('/') },
    // Jika fungsi onScrollToFeatures ada, gunakan itu. Jika tidak, jangan lakukan apa-apa.
    { text: "Fitur", action: onScrollToFeatures || (() => {}) },
    { text: "Tim", action: onScrollToTeams || (() => {}) },
    { text: "Lapangan", action: onScrollToFields || (() => {}) },
    { text: "Daftar", action: () => router.push('/daftar') },
    { text: "Login", action: () => router.push('/login') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image source={require('../assets/images/SparZone.jpg')} style={styles.logo} />

        {isMobile ? (
          <TouchableOpacity onPress={() => setIsMenuOpen(true)} style={styles.hamburgerButton}>
            <Ionicons name="menu" size={32} color="#4A0072" />
          </TouchableOpacity>
        ) : (
          <View style={styles.menuContainer}>
            {menuItems.map(item => <HeaderButton key={item.text} text={item.text} onPress={item.action} />)}
          </View>
        )}
      </View>

      <Modal
        visible={isMenuOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsMenuOpen(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setIsMenuOpen(false)}>
          <View style={styles.mobileMenuContainer}>
            {menuItems.map(item => (
              <TouchableOpacity
                key={item.text}
                style={styles.mobileMenuItem}
                onPress={() => {
                  item.action();
                  setIsMenuOpen(false);
                }}
              >
                <Text style={styles.mobileMenuText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#fff', zIndex: 10 },
  header: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  logo: {
    height: 50,
    width: 240,
    resizeMode: 'contain',
  },
  menuContainer: { flexDirection: 'row', alignItems: 'center' },
  menuButton: { marginLeft: 20, padding: 8, borderRadius: 6 },
  menuButtonHover: { backgroundColor: '#4A0072' },
  menuText: { fontSize: 18, fontFamily: 'Bebas Neue', letterSpacing: 1.5, color: '#4A0072' },
  menuTextHover: { color: '#FFFFFF' },
  hamburgerButton: { padding: 10 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  mobileMenuContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '60%',
    maxWidth: 300,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  mobileMenuItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  mobileMenuText: { fontSize: 20, fontFamily: 'Bebas Neue', letterSpacing: 1.5, color: '#4A0072' },
});

export default Header;
