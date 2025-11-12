
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

// Baca API Key dari environment variable
const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

const dummyFields = [
  { 
    id: '1', 
    name: 'Arena Futsal Khatulistiwa', 
    position: { lat: -0.0235, lng: 109.3415 },
    address: 'Jl. Ahmad Yani, Pontianak'
  },
  { 
    id: '2', 
    name: 'Gor Pontianak Futsal', 
    position: { lat: -0.0350, lng: 109.3300 },
    address: 'Jl. Gajah Mada, Pontianak'
  },
  { 
    id: '3', 
    name: 'Sentosa Futsal Center', 
    position: { lat: -0.0190, lng: 109.3550 },
    address: 'Jl. Tanjungpura, Pontianak'
  },
];

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -0.027,
  lng: 109.34
};

const FieldsMapSection = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY || '' // Pastikan API_KEY tidak undefined
  });

  if (loadError) {
    return <Text>Error loading maps</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>CARI LAPANGAN TERDEKAT</Text>
      <View style={styles.mapOuterContainer}>
        <View style={styles.mapInnerContainer}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              {dummyFields.map(field => (
                <MarkerF
                  key={field.id}
                  position={field.position}
                  label={field.name}
                />
              ))}
            </GoogleMap>
          ) : (
            <Text>Loading Map...</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: '#F8F9FA',
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
  mapOuterContainer: {
    height: 400,
    marginHorizontal: 20,
  },
  mapInnerContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
  }
});

export default FieldsMapSection;
