
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SPARZ-ONE</Text>
      <Text style={styles.copyright}>
        Copyright © {currentYear} Sparz-one. All rights reserved.
      </Text>
      <View style={styles.socialsContainer}>
        <TouchableOpacity style={styles.socialIcon}>
          <FontAwesome name="facebook-square" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <FontAwesome name="instagram" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <FontAwesome name="twitter-square" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343A40',
    padding: 40,
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Bebas Neue',
    fontSize: 32,
    color: '#fff',
    marginBottom: 15,
  },
  copyright: {
    color: '#ADB5BD',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  socialsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    marginHorizontal: 15,
  },
});

export default Footer;
