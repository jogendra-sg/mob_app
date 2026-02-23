# Android Push Notifications Setup Guide

This project has been configured to support push notifications **for Android only** using Firebase Cloud Messaging (FCM).

## Prerequisites

1. A Firebase project (create one at [Firebase Console](https://console.firebase.google.com/))
2. Android device or emulator with Google Play Services

## Setup Steps

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Add an Android app to your Firebase project:
   - Package name: `com.awesomeproject`
4. Download the `google-services.json` file
5. Place the `google-services.json` file in:
   ```
   android/app/google-services.json
   ```

   **IMPORTANT**: A template file is provided at `android/app/google-services.json.template` for reference. Replace it with your actual `google-services.json` from Firebase.

### 2. Install Dependencies

All required dependencies are already installed:
- `@react-native-firebase/app`
- `@react-native-firebase/messaging`

If you need to reinstall:

```bash
cd AwesomeProject
npm install
```

### 3. Build and Run

```bash
# Clean the build (recommended)
cd android && ./gradlew clean && cd ..

# Run on Android
npm run android
```

## What's Implemented

### Android Configuration

1. **build.gradle** (project level):
   - Added Google Services classpath

2. **build.gradle** (app level):
   - Applied Google Services plugin

3. **AndroidManifest.xml**:
   - Added required permissions:
     - `POST_NOTIFICATIONS` (Android 13+)
     - `VIBRATE`
     - `RECEIVE_BOOT_COMPLETED`
   - Configured Firebase Messaging Service
   - Added default notification channel

4. **FirebaseMessagingService.kt**:
   - Custom service to handle FCM messages
   - Displays notifications when app is in background/foreground
   - Handles notification taps

5. **NotificationService.ts**:
   - Comprehensive notification handling with **Platform.OS checks**
   - Only runs on Android devices
   - Uses Firebase Cloud Messaging for all notification handling
   - Handles:
     - Permission requests (including Android 13+)
     - FCM token management
     - Foreground notifications (auto-displayed by Firebase)
     - Background notifications (auto-displayed by Firebase)
     - Notification interactions
     - Token refresh

6. **App.tsx**:
   - Initializes notifications on app launch (Android only)
   - Platform-specific initialization

## Features

### Supported on Android

✅ Foreground notifications  
✅ Background notifications  
✅ Notification when app is killed  
✅ Notification tap handling  
✅ Custom notification channels  
✅ FCM token retrieval  
✅ Token refresh handling  
✅ Android 13+ permission handling  

### iOS Support

❌ Push notifications are **NOT** implemented for iOS
- The code includes Platform checks to prevent iOS execution
- All notification-related code will be skipped on iOS devices

## Testing Push Notifications

### Using Firebase Console

1. Go to Firebase Console > Cloud Messaging
2. Click "Send your first message"
3. Enter notification title and text
4. Select your app
5. Send the notification

### Using FCM Token

The app logs the FCM token in the console. You can use this token to send notifications programmatically:

```bash
curl -X POST https://fcm.googleapis.com/fcm/send \
  -H "Authorization: key=YOUR_SERVER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "DEVICE_FCM_TOKEN",
    "notification": {
      "title": "Test Notification",
      "body": "This is a test notification"
    },
    "data": {
      "custom_key": "custom_value"
    }
  }'
```

## Notification Behavior

### Foreground (App is open)
- Notification is displayed using Notifee
- Custom UI handling available

### Background (App is minimized)
- System notification is displayed automatically
- Tap opens the app

### Killed (App is not running)
- System notification is displayed automatically
- Tap launches the app

## API Usage

The `NotificationService` provides the following methods:

```typescript
import NotificationService from './src/services/NotificationService';

// Initialize (automatically called in App.tsx for Android)
await NotificationService.initialize();

// Get FCM token
const token = await NotificationService.getToken();

// Request permission
const hasPermission = await NotificationService.requestPermission();
```

Firebase automatically handles displaying notifications in all states (foreground, background, and killed).

## Platform Checks

All notification code includes Platform checks:

```typescript
if (Platform.OS !== 'android') {
  console.log('Push notifications are only supported on Android');
  return;
}
```

This ensures:
- No iOS-specific code runs
- No errors on iOS devices
- Clean console logs indicating Android-only support

## Troubleshooting

### No notifications received

1. Check that `google-services.json` is in the correct location
2. Verify the package name matches in Firebase Console
3. Check if notification permissions are granted
4. For Android 13+, ensure POST_NOTIFICATIONS permission is granted
5. Check logs for FCM token

### Build errors

1. Clean the build:
   ```bash
   cd android && ./gradlew clean && cd ..
   ```
2. Clear Metro cache:
   ```bash
   npm start -- --reset-cache
   ```
3. Reinstall node modules:
   ```bash
   rm -rf node_modules && npm install
   ```

### Permission denied

- On Android 13+, manually check app permissions in Settings > Apps > AwesomeProject > Notifications

## File Structure

```
AwesomeProject/
├── android/
│   ├── app/
│   │   ├── google-services.json          # YOU NEED TO ADD THIS
│   │   ├── google-services.json.template # Template for reference
│   │   ├── build.gradle                  # Modified
│   │   └── src/main/
│   │       ├── AndroidManifest.xml       # Modified
│   │       └── java/com/awesomeproject/
│   │           └── FirebaseMessagingService.kt  # New file
│   └── build.gradle                      # Modified
├── src/
│   └── services/
│       └── NotificationService.ts        # New file (Android-only)
└── App.tsx                               # Modified
```

## Next Steps

1. **Add your `google-services.json`** file to `android/app/`
2. Test notifications using Firebase Console
3. Implement server-side FCM integration
4. Customize notification handling based on your app's needs
5. Store FCM tokens on your backend for targeted notifications

## Important Notes

- This implementation is **Android-only**
- iOS support is not included and would require:
  - APNs configuration
  - iOS-specific permissions
  - Separate iOS notification service
  - Additional native iOS code
- The code gracefully handles iOS by skipping notification setup
- All console logs indicate platform-specific behavior

## Resources

- [React Native Firebase Docs](https://rnfirebase.io/)
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)
- [Firebase Console](https://console.firebase.google.com/)
- [FCM HTTP v1 API](https://firebase.google.com/docs/cloud-messaging/http-server-ref)
