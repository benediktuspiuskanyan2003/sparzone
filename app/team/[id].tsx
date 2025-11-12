
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const TeamProfile = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Tim</Text>
      <Text style={styles.text}>Ini adalah halaman profil untuk Tim dengan ID: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default TeamProfile;
