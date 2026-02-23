/**
 * Push Notification Service
 * Android-only implementation using Firebase Cloud Messaging
 */

import {Platform, PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

class NotificationService {
  /**
   * Request notification permissions (Android 13+)
   */
  async requestPermission(): Promise<boolean> {
    if (Platform.OS !== 'android') {
      console.log('Push notifications are only supported on Android');
      return false;
    }

    try {
      // For Android 13 (API 33) and above, request POST_NOTIFICATIONS permission
      if (Platform.Version >= 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Notification permission denied');
          return false;
        }
      }

      // Request Firebase messaging permission
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Notification permission granted');
        return true;
      }

      console.log('Notification permission denied');
      return false;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  }

  /**
   * Get FCM token
   */
  async getToken(): Promise<string | null> {
    if (Platform.OS !== 'android') {
      return null;
    }

    try {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
      return token;
    } catch (error) {
      console.error('Error getting FCM token:', error);
      return null;
    }
  }

  /**
   * Setup foreground notification handler
   * Firebase will automatically display notifications in foreground
   */
  setupForegroundHandler() {
    if (Platform.OS !== 'android') {
      return () => {};
    }

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Foreground notification received:', remoteMessage);
      // Firebase automatically displays the notification
      // You can add custom logic here if needed
    });

    return unsubscribe;
  }

  /**
   * Setup background notification handler
   */
  setupBackgroundHandler() {
    if (Platform.OS !== 'android') {
      return;
    }

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Background notification received:', remoteMessage);
      // Process background notification data if needed
    });
  }

  /**
   * Setup notification opened handler
   */
  setupNotificationOpenedHandler() {
    if (Platform.OS !== 'android') {
      return () => {};
    }

    // Handle notification opened from quit state
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification opened from quit state:',
            remoteMessage.notification,
          );
          // Handle navigation or custom logic here
        }
      });

    // Handle notification opened from background state
    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification opened from background state:',
        remoteMessage.notification,
      );
      // Handle navigation or custom logic here
    });

    return unsubscribe;
  }

  /**
   * Setup token refresh handler
   */
  setupTokenRefreshHandler() {
    if (Platform.OS !== 'android') {
      return () => {};
    }

    const unsubscribe = messaging().onTokenRefresh(token => {
      console.log('FCM Token refreshed:', token);
      // Send the new token to your server
    });

    return unsubscribe;
  }

  /**
   * Initialize all notification handlers
   */
  async initialize() {
    if (Platform.OS !== 'android') {
      console.log('Push notifications are only enabled for Android');
      return false;
    }

    try {
      // Request permissions
      const hasPermission = await this.requestPermission();
      if (!hasPermission) {
        console.log('Notification permission not granted');
        return false;
      }

      // Get and log FCM token
      await this.getToken();

      // Setup handlers
      this.setupBackgroundHandler();
      this.setupForegroundHandler();
      this.setupNotificationOpenedHandler();
      this.setupTokenRefreshHandler();

      console.log('Push notifications initialized successfully');
      return true;
    } catch (error) {
      console.error('Error initializing push notifications:', error);
      return false;
    }
  }
}

export default new NotificationService();
