
import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Data contoh untuk tim
const dummyTeams = [
  { id: '1', name: 'Rajawali FC', location: 'Jakarta Selatan', logo: 'shield-checkmark-outline' as const },
  { id: '2', name: 'Garuda Muda', location: 'Bandung', logo: 'bonfire-outline' as const },
  { id: '3', name: 'Elang Perkasa', location: 'Surabaya', logo: 'flash-outline' as const },
  { id: '4', name: 'Singa Bola', location: 'Medan', logo: 'flame-outline' as const },
  { id: '5', name: 'Harimau Putih', location: 'Yogyakarta', logo: 'bug-outline' as const },
  { id: '6', name: 'Kancil Cerdik', location: 'Semarang', logo: 'leaf-outline' as const },
];

// Tipe untuk item tim
type TeamCardProps = {
    item: typeof dummyTeams[0];
};

// Komponen Kartu Tim
const TeamCard = ({ item }: TeamCardProps) => {
  const router = useRouter();
  return (
    <View style={styles.card}>
      <Ionicons name={item.logo} size={60} color="#333" />
      <Text style={styles.teamName}>{item.name}</Text>
      <Text style={styles.teamLocation}>{item.location}</Text>
      <Pressable style={styles.profileButton} onPress={() => router.push(`/team/${item.id}`)}>
        <Text style={styles.profileButtonText}>Lihat Profil</Text>
      </Pressable>
    </View>
  );
};


// Komponen Utama Seksi Tim
const TeamsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>TIM POPULER</Text>
      <FlatList
        data={dummyTeams}
        renderItem={({ item }) => <TeamCard item={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        backgroundColor: '#ffffff',
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'Bebas Neue',
        color: '#333',
        paddingHorizontal: 20,
    },
    listContainer: {
        paddingHorizontal: 15, 
    },
    card: {
        width: 200,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#f0f0f0',
    },
    teamName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        fontFamily: 'Bebas Neue',
        color: '#4A0072',
    },
    teamLocation: {
        fontSize: 14,
        color: '#6c757d',
        marginTop: 5,
    },
    profileButton: {
        marginTop: 15,
        backgroundColor: '#4A0072',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
    profileButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default TeamsSection;
