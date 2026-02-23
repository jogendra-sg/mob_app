import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../types';
import {HomeScreen} from '../screens/main/HomeScreen';
import {SearchScreen} from '../screens/main/SearchScreen';
import {NotificationsScreen} from '../screens/main/NotificationsScreen';
import {ProfileScreen} from '../screens/main/ProfileScreen';
import {SettingsScreen} from '../screens/main/SettingsScreen';
import {colors} from '../utils/colors';
import {Text, Platform} from 'react-native';

const Tab = createBottomTabNavigator<MainTabParamList>();

// Simple icon component (you can replace with react-native-vector-icons later)
const TabIcon = ({focused, label}: {focused: boolean; label: string}) => {
  const getEmoji = () => {
    switch (label) {
      case 'Home':
        return '🏠';
      case 'Search':
        return '🔍';
      case 'Notifications':
        return '🔔';
      case 'Profile':
        return '👤';
      case 'Settings':
        return '⚙️';
      default:
        return '•';
    }
  };

  const iconStyle = {fontSize: 24, opacity: focused ? 1 : 0.5};

  return <Text style={iconStyle}>{getEmoji()}</Text>;
};

export const MainNavigator = () => {
  const renderTabIcon = ({focused, route}: any) => (
    <TabIcon focused={focused} label={route.name} />
  );

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => renderTabIcon({focused, route}),
        tabBarActiveTintColor: colors.tabBarActive,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          paddingBottom: Platform.OS === 'ios' ? 20 : 5,
          height: Platform.OS === 'ios' ? 85 : 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
