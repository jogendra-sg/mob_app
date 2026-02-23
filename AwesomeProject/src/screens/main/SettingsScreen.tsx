import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Switch,
} from 'react-native';
import {colors} from '../../utils/colors';
import {authService} from '../../services/authService';

interface SettingRowProps {
  title: string;
  value?: string;
  onPress?: () => void;
  showSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}

const SettingRow = ({
  title,
  value,
  onPress,
  showSwitch,
  switchValue,
  onSwitchChange,
}: SettingRowProps) => (
  <TouchableOpacity
    style={styles.settingRow}
    onPress={onPress}
    disabled={showSwitch}>
    <Text style={styles.settingTitle}>{title}</Text>
    {value && <Text style={styles.settingValue}>{value}</Text>}
    {showSwitch && (
      <Switch
        value={switchValue}
        onValueChange={onSwitchChange}
        trackColor={{false: colors.border, true: colors.primary}}
      />
    )}
    {!showSwitch && !value && <Text style={styles.arrow}>›</Text>}
  </TouchableOpacity>
);

export const SettingsScreen = () => {
  const [pushEnabled, setPushEnabled] = React.useState(true);
  const [emailEnabled, setEmailEnabled] = React.useState(false);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await authService.logout();
          // Navigation will be handled automatically by auth state change
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <SettingRow
            title="Push Notifications"
            showSwitch
            switchValue={pushEnabled}
            onSwitchChange={setPushEnabled}
          />
          <SettingRow
            title="Email Notifications"
            showSwitch
            switchValue={emailEnabled}
            onSwitchChange={setEmailEnabled}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingRow
            title="Edit Profile"
            onPress={() => Alert.alert('Coming Soon')}
          />
          <SettingRow
            title="Change Password"
            onPress={() => Alert.alert('Coming Soon')}
          />
          <SettingRow
            title="Privacy Settings"
            onPress={() => Alert.alert('Coming Soon')}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App</Text>
          <SettingRow title="Version" value="1.0.0" />
          <SettingRow
            title="Terms of Service"
            onPress={() => Alert.alert('Coming Soon')}
          />
          <SettingRow
            title="Privacy Policy"
            onPress={() => Alert.alert('Coming Soon')}
          />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  settingTitle: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  settingValue: {
    fontSize: 16,
    color: colors.textSecondary,
    marginRight: 8,
  },
  arrow: {
    fontSize: 24,
    color: colors.textSecondary,
  },
  logoutButton: {
    backgroundColor: colors.danger,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  logoutButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
});
