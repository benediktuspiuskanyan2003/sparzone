
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Definisikan tipe untuk setiap item fitur
type FeatureItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress: () => void;
};

// Komponen untuk satu kartu fitur
const FeatureItem = ({ icon, title, description, onPress }: FeatureItemProps) => {
  return (
    <Pressable style={styles.featureCard} onPress={onPress}>
      <Ionicons name={icon} size={48} color="#4A0072" />
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </Pressable>
  );
};

// Komponen utama untuk seksi fitur
const FeaturesSection = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>FITUR UTAMA KAMI</Text>
        <View style={styles.featuresGrid}>
            <FeatureItem
                icon="people-outline"
                title="Buat Tim"
                description="Bentuk tim futsal Anda sendiri dan undang teman-teman Anda untuk bergabung."
                onPress={() => { /* Arahkan ke halaman buat tim */ }}
            />
            <FeatureItem
                icon="search-outline"
                title="Cari Lawan Sparring"
                description="Temukan tim lain di sekitar Anda yang siap untuk pertandingan persahabatan."
                onPress={() => { /* Arahkan ke halaman cari lawan */ }}
            />
            <FeatureItem
                icon="calendar-outline"
                title="Booking Lapangan"
                description="Pesan jadwal lapangan futsal favorit Anda dengan mudah melalui aplikasi."
                onPress={() => { /* Arahkan ke halaman booking */ }}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Bebas Neue',
    color: '#333',
  },
  featuresGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Memastikan item pindah ke baris baru di layar kecil
  },
  featureCard: {
    width: '30%', // Di layar besar, 3 item per baris
    minWidth: 280, // Memastikan tidak terlalu kecil di layar mobile
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20, // Jarak antar kartu jika wrapping terjadi
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    fontFamily: 'Bebas Neue',
    color: '#4A0072',
  },
  featureDescription: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
  },
});

export default FeaturesSection;
