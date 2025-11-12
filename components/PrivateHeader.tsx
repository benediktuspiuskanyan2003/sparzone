
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { supabase } from '../lib/supabaseClient';

// The props can come from different navigators (Drawer or Tabs),
// so we define a flexible interface for what we actually need.
type HeaderProps = {
  navigation?: {
    toggleDrawer?: () => void;
    [key: string]: any;
  };
  [key: string]: any;
};

const PrivateHeader = (props: HeaderProps) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDrawer = () => {
    if (props.navigation?.toggleDrawer) {
      props.navigation.toggleDrawer();
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/login');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        {!isMobile && props.navigation?.toggleDrawer && (
          <TouchableOpacity onPress={toggleDrawer} style={styles.menuButton}>
            <Ionicons name="menu-outline" size={32} color="#333" />
          </TouchableOpacity>
        )}
        <Image source={require('../assets/images/SparZone.jpg')} style={styles.logo} />
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>

        <View>
          <TouchableOpacity onPress={toggleDropdown} style={styles.profileButton}>
            <Ionicons name="person-circle-outline" size={32} color="#333" />
          </TouchableOpacity>

          {isDropdownVisible && (
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={handleLogout} style={styles.dropdownItem}>
                <Ionicons name="log-out-outline" size={22} color="#333" />
                <Text style={styles.dropdownText}>Logout</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1, // Ensures dropdown appears above other content
  },
  menuButton: {
    marginRight: 15,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  iconButton: {
    marginHorizontal: 10,
  },
  profileButton: {
    marginLeft: 10,
  },
  dropdown: {
    position: 'absolute',
    top: 45, // Position below the profile icon
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // for Android
    width: 150, // Set a fixed width
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  dropdownText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default PrivateHeader;
