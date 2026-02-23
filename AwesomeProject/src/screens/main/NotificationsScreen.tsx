import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../../utils/colors';

const mockNotifications = [
  {
    id: '1',
    title: 'Welcome!',
    message: 'Thanks for using our app',
    time: '5m ago',
  },
  {
    id: '2',
    title: 'New Feature',
    message: 'Check out push notifications',
    time: '1h ago',
  },
  {
    id: '3',
    title: 'Update Available',
    message: 'Version 2.0 is ready',
    time: '2h ago',
  },
  {
    id: '4',
    title: 'Reminder',
    message: 'Complete your profile',
    time: '1d ago',
  },
];

export const NotificationsScreen = () => {
  const renderItem = ({item}: {item: (typeof mockNotifications)[0]}) => (
    <View style={styles.notificationItem}>
      <View style={styles.iconContainer}>
        <View style={styles.icon} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
      </View>

      <FlatList
        data={mockNotifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 16,
    backgroundColor: colors.surface,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
  },
  list: {
    padding: 16,
  },
  notificationItem: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
