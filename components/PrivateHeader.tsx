
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

  // This function will be called when the menu icon is pressed.
  const toggleDrawer = () => {
    // We safely check if the function exists on the navigation prop before calling it.
    if (props.navigation?.toggleDrawer) {
      props.navigation.toggleDrawer();
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        {/* On web/desktop, show the hamburger menu to toggle the drawer.
            We also check if the toggleDrawer function is available. */}
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
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle-outline" size={32} color="#333" />
        </TouchableOpacity>
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
});

export default PrivateHeader;
