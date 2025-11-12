
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OpenSparringScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>Daftar Open Sparring</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default OpenSparringScreen;
