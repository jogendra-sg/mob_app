import React, {useEffect, useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './AuthNavigator';
import {MainNavigator} from './MainNavigator';
import {authService} from '../services/authService';
import {notificationService} from '../services/notificationService';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import BootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigationRef = useRef<any>(null);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Initialize notification service
      await notificationService.initialize();
      
      // Check authentication status
      const authStatus = await authService.isAuthenticated();
      setIsAuthenticated(authStatus);
    } catch {
      console.error('Error initializing app');
      setIsAuthenticated(false);
    } finally {
      // Hide splash screen after checking auth
      setTimeout(() => {
        BootSplash.hide({fade: true});
      }, 1000);
    }
  };

  useEffect(() => {
    // Listen for auth state changes
    const checkAuthInterval = setInterval(async () => {
      const authStatus = await authService.isAuthenticated();
      if (authStatus !== isAuthenticated) {
        setIsAuthenticated(authStatus);
      }
    }, 1000);

    return () => clearInterval(checkAuthInterval);
  }, [isAuthenticated]);

  // Set navigation ref for notification service
  useEffect(() => {
    if (navigationRef.current) {
      notificationService.setNavigationRef(navigationRef);
    }
  }, []);

  // Show loading screen while checking auth
  if (isAuthenticated === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
