
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import PrivateDrawerContent from '../../components/PrivateDrawerContent';
import PrivateHeader from '../../components/PrivateHeader';

// Define menu items in a single place for consistency
const menuItems = [
    { name: "index", title: "Dashboard", icon: "home-outline" },
    { name: "profile", title: "Profile", icon: "person-circle-outline" },
    { name: "my-team", title: "My Team", icon: "people-outline" },
    { name: "open-sparring", title: "Open Sparring", icon: "sparkles-outline" },
    { name: "futsal-fields", title: "Futsal Fields", icon: "football-outline" },
];

export default function PrivateLayout() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // Standard breakpoint for tablets

  // For mobile devices, display a bottom tab navigator.
  if (isMobile) {
    return (
      <Tabs
        screenOptions={{
          header: (props) => <PrivateHeader {...props} />,
          tabBarActiveTintColor: '#333',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        {menuItems.map(item => (
          <Tabs.Screen
            key={item.name}
            name={item.name}
            options={{
              title: item.title,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={item.icon as any} size={size} color={color} />
              ),
              tabBarLabel: item.title,
            }}
          />
        ))}
      </Tabs>
    );
  }

  // For wider screens (web/desktop), display a drawer navigator.
  return (
    <Drawer
      drawerContent={(props) => <PrivateDrawerContent {...props} />}
      screenOptions={{
        header: (props) => <PrivateHeader {...props} />,
      }}
    >
       {menuItems.map(item => (
          <Drawer.Screen
            key={item.name}
            name={item.name} // This must match the file name in the directory
            options={{
              title: item.title,
              drawerIcon: ({ color, size }) => (
                <Ionicons name={item.icon as any} size={size} color={color} />
              ),
            }}
          />
        ))}
    </Drawer>
  );
}
