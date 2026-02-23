/**
 * Production-style React Native App
 * Features: Authentication, Navigation, Push Notifications
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar, useColorScheme, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigator} from './src/navigation/RootNavigator';
import NotificationService from './src/services/notificationService';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // Initialize push notifications only for Android
    if (Platform.OS === 'android') {
      NotificationService.initialize()
        .then(success => {
          if (success) {
            console.log('Push notifications are ready');
          } else {
            console.log('Failed to initialize push notifications');
          }
        })
        .catch(error => {
          console.error('Error during notification initialization:', error);
        });
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
