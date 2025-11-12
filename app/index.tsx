
import { StyleSheet, ScrollView, View } from "react-native";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TeamsSection from "../components/TeamsSection";
import FieldsMapSection from "../components/FieldsMapSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <TeamsSection />
        <FieldsMapSection />
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
