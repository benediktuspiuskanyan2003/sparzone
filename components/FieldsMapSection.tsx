
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

// Data contoh untuk lapangan futsal di Pontianak
const dummyFields = [
  { 
    id: '1', 
    name: 'Arena Futsal Khatulistiwa', 
    coordinate: { latitude: -0.0235, longitude: 109.3415 },
    address: 'Jl. Ahmad Yani, Pontianak'
  },
  { 
    id: '2', 
    name: 'Gor Pontianak Futsal', 
    coordinate: { latitude: -0.0350, longitude: 109.3300 },
    address: 'Jl. Gajah Mada, Pontianak'
  },
  { 
    id: '3', 
    name: 'Sentosa Futsal Center', 
    coordinate: { latitude: -0.0190, longitude: 109.3550 },
    address: 'Jl. Tanjungpura, Pontianak'
  },
];

const FieldsMapSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>CARI LAPANGAN TERDEKAT</Text>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} // Gunakan Google Maps
          style={styles.map}
          initialRegion={{
            latitude: -0.027,
            longitude: 109.34,
            latitudeDelta: 0.04, // Zoom level
            longitudeDelta: 0.04, // Zoom level
          }}
        >
          {dummyFields.map(field => (
            <Marker
              key={field.id}
              coordinate={field.coordinate}
              title={field.name}
              description={field.address}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: '#F8F9FA', // Sedikit berbeda untuk memisahkan seksi
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
  mapContainer: {
    height: 400, // Tinggi peta
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: 'hidden', // Penting agar peta mengikuti border radius
    backgroundColor: '#e0e0e0', // Warna placeholder jika peta gagal dimuat
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default FieldsMapSection;
