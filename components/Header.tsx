
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text, Pressable, useWindowDimensions, Modal, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Menggunakan ikon untuk hamburger menu

// Komponen Tombol Menu untuk Desktop (tidak berubah)
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

const Header = () => {
  const [fontsLoaded] = useFonts({ 'Bebas Neue': require('../assets/fonts/BebasNeue-Regular.ttf'), });
  const router = useRouter();
  const { width } = useWindowDimensions(); // Mendapatkan lebar layar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!fontsLoaded) { return null; }

  const isMobile = width < 768; // Tentukan breakpoint untuk mobile

  const menuItems = [
    { text: "Beranda", action: () => router.push('/') },
    { text: "Lapangan", action: () => router.push('/') },
    { text: "Tim", action: () => {} },
    { text: "Daftar", action: () => router.push('/daftar') },
    { text: "Login", action: () => router.push('/login') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image source={require('../assets/images/SparZone.jpg')} style={styles.logo} />

        {isMobile ? (
          // Tampilan Mobile: Tombol Hamburger
          <TouchableOpacity onPress={() => setIsMenuOpen(true)} style={styles.hamburgerButton}>
            <Ionicons name="menu" size={32} color="#4A0072" />
          </TouchableOpacity>
        ) : (
          // Tampilan Desktop: Menu Lengkap
          <View style={styles.menuContainer}>
            {menuItems.map(item => <HeaderButton key={item.text} text={item.text} onPress={item.action} />)}
          </View>
        )}
      </View>

      {/* Modal untuk Menu Mobile */}
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
                  setIsMenuOpen(false); // Tutup menu setelah navigasi
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
  safeArea: { backgroundColor: '#fff', zIndex: 10 }, // zIndex agar header di atas konten lain
  header: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20, // Mengurangi padding untuk mobile
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  logo: {
    height: 50, // Sedikit lebih kecil agar pas
    width: 180,
    resizeMode: 'contain',
  },
  // Style untuk menu desktop
  menuContainer: { flexDirection: 'row', alignItems: 'center' },
  menuButton: { marginLeft: 20, padding: 8, borderRadius: 6 },
  menuButtonHover: { backgroundColor: '#4A0072' },
  menuText: { fontSize: 18, fontFamily: 'Bebas Neue', letterSpacing: 1.5, color: '#4A0072' },
  menuTextHover: { color: '#FFFFFF' },

  // Style untuk menu mobile
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
