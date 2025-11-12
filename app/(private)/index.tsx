
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Definisikan tipe untuk item notifikasi untuk memastikan type safety
type NotificationItem = {
  id: string;
  icon: keyof typeof Ionicons.glyphMap; // Ini adalah perbaikannya
  text: string;
  time: string;
};

const HomeScreen = () => {
  const { user } = useAuth();
  const { width } = useWindowDimensions();
  const displayName = user?.user_metadata?.full_name || user?.email;

  const isMobile = width < 768;

  const upcomingSchedules = [
    { id: '1', type: 'Sparring', title: 'Melawan Garuda Jaya', date: 'Sabtu, 25 Mei 2024', time: '19:00 WIB', location: 'Lapangan Futsal ABC' },
    { id: '2', type: 'Booking', title: 'Latihan Rutin Tim', date: 'Jumat, 31 Mei 2024', time: '20:00 WIB', location: 'Lapangan Futsal XYZ' },
  ];

  // Gunakan tipe yang sudah didefinisikan
  const recentNotifications: NotificationItem[] = [
    { id: '1', icon: 'shield-checkmark-outline', text: 'Tim Bintang Timur menerima tantangan sparring Anda.', time: '5 menit yang lalu' },
    { id: '2', icon: 'calendar-outline', text: 'Booking Anda untuk Lapangan Futsal ABC telah dikonfirmasi.', time: '1 jam yang lalu' },
    { id: '3', icon: 'person-add-outline', text: "'Andi' ingin bergabung dengan tim Anda.", time: '3 jam yang lalu' },
  ];

  const leaderboardTeams = [
    { rank: 1, name: 'Phoenix FC', points: 1250, record: '8W - 2L' },
    { rank: 2, name: 'Garuda Jaya', points: 1100, record: '7W - 3L' },
    { rank: 3, name: 'Bintang Timur', points: 950, record: '6W - 4L' },
    { rank: 4, name: 'Nusantara United', points: 800, record: '5W - 5L' },
  ];

  const actionButtonStyles = [styles.actionButton, !isMobile && styles.actionButtonWeb];
  const quickActionsContainerStyles = [styles.quickActionsGrid, !isMobile && styles.quickActionsGridWeb];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Selamat Datang, {displayName}!</Text>
          <Text style={styles.welcomeSubtitle}>Siap untuk bertanding hari ini?</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Aksi Cepat</Text>
          <View style={quickActionsContainerStyles}>
            <TouchableOpacity style={actionButtonStyles} onPress={() => router.push('/open-sparring')}><Ionicons name="search-outline" size={30} color="#fff" /><Text style={styles.actionText}>Cari Lawan</Text></TouchableOpacity>
            <TouchableOpacity style={actionButtonStyles} onPress={() => router.push('/futsal-fields')}><Ionicons name="calendar-outline" size={30} color="#fff" /><Text style={styles.actionText}>Booking</Text></TouchableOpacity>
            <TouchableOpacity style={actionButtonStyles} onPress={() => router.push('/my-team')}><Ionicons name="people-outline" size={30} color="#fff" /><Text style={styles.actionText}>Tim Saya</Text></TouchableOpacity>
            <TouchableOpacity style={actionButtonStyles} onPress={() => {}}><Ionicons name="time-outline" size={30} color="#fff" /><Text style={styles.actionText}>Jadwal Saya</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Jadwal & Aktivitas Mendatang</Text>
          {upcomingSchedules.map((item) => (
            <TouchableOpacity key={item.id} style={styles.scheduleCard}>
              <View style={styles.scheduleIconContainer}><Ionicons name={item.type === 'Sparring' ? 'football-outline' : 'bookmarks-outline'} size={28} color="#1e90ff" /></View>
              <View style={styles.scheduleDetails}><Text style={styles.scheduleTitle}>{item.title}</Text><Text style={styles.scheduleInfo}>{item.location}</Text><Text style={styles.scheduleInfo}>{item.date} - {item.time}</Text></View>
              <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.seeAllButton}><Text style={styles.seeAllText}>Lihat Semua Jadwal</Text></TouchableOpacity>
        </View>
        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Notifikasi Terbaru</Text>
          {recentNotifications.map((notif) => (
            <View key={notif.id} style={styles.notificationCard}>
              <Ionicons name={notif.icon} size={24} color="#555" style={styles.notificationIcon} />
              <View style={styles.notificationTextContainer}><Text style={styles.notificationText}>{notif.text}</Text><Text style={styles.notificationTime}>{notif.time}</Text></View>
            </View>
          ))}
           <TouchableOpacity style={styles.seeAllButton}><Text style={styles.seeAllText}>Lihat Semua Notifikasi</Text></TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Papan Peringkat Teratas</Text>
          <View style={styles.leaderboardContainer}>
            {leaderboardTeams.map((team, index) => (
              <View key={team.rank} style={[styles.leaderboardRow, index === 0 && styles.firstPlace]}>
                <Text style={styles.leaderboardRank}>{team.rank}</Text>
                <Text style={styles.leaderboardName}>{team.name}</Text>
                <Text style={styles.leaderboardPoints}>{team.points} Poin</Text>
              </View>
            ))}
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  content: { padding: 20 },
  welcomeCard: { backgroundColor: '#fff', borderRadius: 12, padding: 20, marginBottom: 25, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3.84, elevation: 5 },
  welcomeTitle: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  welcomeSubtitle: { fontSize: 16, color: '#666', marginTop: 5 },
  sectionContainer: { marginBottom: 25 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  quickActionsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  actionButton: { backgroundColor: '#1e90ff', width: '48%', aspectRatio: 1.2, borderRadius: 12, alignItems: 'center', justifyContent: 'center', padding: 15, marginBottom: 15 },
  quickActionsGridWeb: { flexWrap: 'nowrap', gap: 20 },
  actionButtonWeb: { width: 180, height: 120, aspectRatio: undefined, marginRight: 20, marginBottom: 0 },
  actionText: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 8, textAlign: 'center' },
  scheduleCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2.22, elevation: 3 },
  scheduleIconContainer: { marginRight: 15, backgroundColor: '#eaf4ff', padding: 10, borderRadius: 50 },
  scheduleDetails: { flex: 1 },
  scheduleTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  scheduleInfo: { fontSize: 14, color: '#777', marginTop: 4 },
  notificationCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 12, borderLeftWidth: 5, borderLeftColor: '#ffc107' },
  notificationIcon: { marginHorizontal: 10 },
  notificationTextContainer: { flex: 1 },
  notificationText: { fontSize: 15, color: '#333', flexWrap: 'wrap' },
  notificationTime: { fontSize: 12, color: '#888', marginTop: 5 },
  seeAllButton: { alignItems: 'center', padding: 12, backgroundColor: '#eaf4ff', borderRadius: 8, marginTop: 5 },
  seeAllText: { color: '#1e90ff', fontWeight: 'bold', fontSize: 15 },
  leaderboardContainer: { backgroundColor: '#fff', borderRadius: 12, padding: 10 },
  leaderboardRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  firstPlace: { backgroundColor: '#fffbe6' },
  leaderboardRank: { fontSize: 16, fontWeight: 'bold', color: '#888', width: 40 },
  leaderboardName: { flex: 1, fontSize: 16, fontWeight: '500', color: '#333' },
  leaderboardPoints: { fontSize: 15, fontWeight: 'bold', color: '#1e90ff' },
});

export default HomeScreen;
