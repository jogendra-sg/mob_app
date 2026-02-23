import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../../utils/colors';
import {authService} from '../../services/authService';
import {notificationService} from '../../services/notificationService';

export const HomeScreen = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const userEmail = await authService.getUserEmail();
    if (userEmail) {
      setEmail(userEmail);
    }
  };

  const sendTestNotification = async (screen: string) => {
    await notificationService.simulateNotification(screen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Welcome back, {email}!</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <Text style={styles.cardText}>
            This is your home screen. You can add widgets, quick actions, or
            any content here.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Test Notifications</Text>
          <Text style={styles.cardText}>
            Tap buttons below to test notification redirection:
          </Text>

          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => sendTestNotification('Search')}>
            <Text style={styles.notificationButtonText}>
              Send notification → Search
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => sendTestNotification('Notifications')}>
            <Text style={styles.notificationButtonText}>
              Send notification → Notifications
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => sendTestNotification('Profile')}>
            <Text style={styles.notificationButtonText}>
              Send notification → Profile
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>App Info</Text>
          <Text style={styles.cardText}>✓ Authentication working</Text>
          <Text style={styles.cardText}>✓ Navigation configured</Text>
          <Text style={styles.cardText}>✓ Push notifications ready</Text>
          <Text style={styles.cardText}>✓ Persistent login enabled</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 24,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  notificationButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    alignItems: 'center',
  },
  notificationButtonText: {
    color: colors.textLight,
    fontSize: 14,
    fontWeight: '600',
  },
});
