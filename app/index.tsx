
import { StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <HeroSection />
      <FeaturesSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
