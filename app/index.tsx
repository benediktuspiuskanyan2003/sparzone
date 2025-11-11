import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Ini adalah halaman utama Anda. Silakan edit file ini untuk melanjutkan.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
