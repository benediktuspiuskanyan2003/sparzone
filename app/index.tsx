
import { StyleSheet, ScrollView, View } from "react-native";
import React, { useRef } from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TeamsSection from "../components/TeamsSection";
import FieldsMapSection from "../components/FieldsMapSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

export default function Index() {
  const scrollViewRef = useRef<ScrollView>(null);

  // Gunakan ref untuk MENYIMPAN nilai posisi Y, bukan untuk menunjuk ke View
  const featuresY = useRef(0);
  const teamsY = useRef(0);
  const fieldsY = useRef(0);

  // Fungsi scroll yang lebih sederhana, langsung menuju ke posisi Y
  const scrollToY = (y: number) => {
    // Kurangi 70 untuk memberi ruang bagi Header yang sticky
    scrollViewRef.current?.scrollTo({ y: y - 70, animated: true });
  };

  return (
    <View style={styles.container}>
      <Header
        // Panggil fungsi scroll dengan posisi Y yang sudah disimpan di ref
        onScrollToFeatures={() => scrollToY(featuresY.current)}
        onScrollToTeams={() => scrollToY(teamsY.current)}
        onScrollToFields={() => scrollToY(fieldsY.current)}
      />
      <ScrollView ref={scrollViewRef}>
        <HeroSection />

        {/* Gunakan onLayout untuk mendapatkan posisi Y setiap seksi secara otomatis */}
        <View onLayout={(event) => { featuresY.current = event.nativeEvent.layout.y; }}>
          <FeaturesSection />
        </View>
        <View onLayout={(event) => { teamsY.current = event.nativeEvent.layout.y; }}>
          <TeamsSection />
        </View>
        <View onLayout={(event) => { fieldsY.current = event.nativeEvent.layout.y; }}>
          <FieldsMapSection />
        </View>

        <TestimonialsSection />
        <CallToActionSection />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
