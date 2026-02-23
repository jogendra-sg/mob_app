# AwesomeProject - Production-Style React Native App

A complete React Native application demonstrating authentication, navigation, and push notifications.

## 📋 Features

- ✅ **Splash Screen** - Shows on app launch while checking authentication
- ✅ **Token-Based Authentication** - Login with AsyncStorage persistence
- ✅ **Smart Navigation** - Auto-switches between Auth & Main stacks
- ✅ **Bottom Tab Navigation** - 5 tabs (Home, Search, Notifications, Profile, Settings)
- ✅ **Push Notifications** - Works in foreground, background, and killed states
- ✅ **Deep Linking** - Notifications redirect to specific screens
- ✅ **Clean Architecture** - Well-organized folder structure

## 📁 Project Structure

```
src/
├── navigation/
│   ├── RootNavigator.tsx      # Main navigation controller
│   ├── AuthNavigator.tsx      # Authentication stack
│   └── MainNavigator.tsx      # Bottom tab navigation
├── screens/
│   ├── auth/
│   │   └── LoginScreen.tsx    # Login with email/password
│   └── main/
│       ├── HomeScreen.tsx     # Home with notification testing
│       ├── SearchScreen.tsx   # Search functionality
│       ├── NotificationsScreen.tsx
│       ├── ProfileScreen.tsx  # User profile
│       └── SettingsScreen.tsx # Settings with logout
├── services/
│   ├── authService.ts         # Authentication & AsyncStorage
│   └── notificationService.ts # Push notification handling
├── types/
│   └── index.ts              # TypeScript definitions
└── utils/
    └── colors.ts             # App color palette
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 22.11.0
- npm or yarn
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Install iOS pods**
   ```bash
   cd ios && bundle exec pod install && cd ..
   ```

3. **Start Metro**
   ```bash
   npm start
   ```

4. **Run on iOS**
   ```bash
   npm run ios
   ```

5. **Run on Android**
   ```bash
   npm run android
   ```

## 🔐 Authentication

The app uses a mock authentication system:
- **Email**: Any valid email format
- **Password**: Minimum 6 characters

The token is stored in AsyncStorage and persists across app restarts.

## 🔔 Testing Push Notifications

1. Login to the app
2. Go to the Home screen
3. Tap any "Send notification" button
4. The notification will appear
5. Tap the notification to navigate to the specified screen

The notification system works in:
- **Foreground**: App is open
- **Background**: App is minimized
- **Killed**: App is completely closed

## 🎨 Customizing App Icon

### For iOS:

1. Create app icons in these sizes:
   - 20x20, 29x29, 40x40, 58x58, 60x60, 76x76, 80x80, 87x87, 120x120, 152x152, 167x167, 180x180, 1024x1024

2. Use Xcode:
   - Open `ios/AwesomeProject.xcworkspace`
   - Select `AwesomeProject` in the project navigator
   - Click on `Images.xcassets` > `AppIcon`
   - Drag and drop your icons

### For Android:

1. Create app icons in these sizes:
   - **mipmap-mdpi**: 48x48
   - **mipmap-hdpi**: 72x72
   - **mipmap-xhdpi**: 96x96
   - **mipmap-xxhdpi**: 144x144
   - **mipmap-xxxhdpi**: 192x192

2. Replace files in:
   ```
   android/app/src/main/res/
   ├── mipmap-mdpi/ic_launcher.png
   ├── mipmap-hdpi/ic_launcher.png
   ├── mipmap-xhdpi/ic_launcher.png
   ├── mipmap-xxhdpi/ic_launcher.png
   └── mipmap-xxxhdpi/ic_launcher.png
   ```

### Easy Way (Recommended):
Use online tools like:
- [Icon Kitchen](https://icon.kitchen/)
- [App Icon Generator](https://appicon.co/)
- [MakeAppIcon](https://makeappicon.com/)

Upload a 1024x1024 PNG and download all sizes.

## 📱 Available Screens

### Authentication Stack
- **Login Screen**: Email/password authentication

### Main Stack (Bottom Tabs)
- **Home**: Dashboard with notification testing
- **Search**: Search functionality with filtering
- **Notifications**: List of notifications
- **Profile**: User profile information
- **Settings**: App settings and logout

## 🔧 Configuration

### Splash Screen
- iOS: Configured in `AppDelegate.swift`
- Android: Configured in `MainActivity.kt` with `launch_screen.xml`

### Navigation
Token-based navigation automatically switches between:
- Auth Stack (when not logged in)
- Main Stack (when logged in)

### Notifications
Using Notifee for local notifications. For production:
1. Set up Firebase Cloud Messaging (FCM) for Android
2. Set up Apple Push Notification Service (APNs) for iOS
3. Configure notification handlers in `notificationService.ts`

## 📦 Key Dependencies

```json
{
  "@react-navigation/native": "Navigation library",
  "@react-navigation/native-stack": "Stack navigator",
  "@react-navigation/bottom-tabs": "Bottom tab navigator",
  "@react-native-async-storage/async-storage": "Persistent storage",
  "react-native-splash-screen": "Splash screen",
  "@notifee/react-native": "Local notifications",
  "react-native-screens": "Native screens",
  "react-native-safe-area-context": "Safe area handling"
}
```

## 🎯 Features Checklist

- [x] Splash screen on launch
- [x] Token checking on startup
- [x] Login with email/password
- [x] Token stored in AsyncStorage
- [x] Persistent login
- [x] Auth stack (Login)
- [x] Main stack (Bottom tabs)
- [x] Auto-switch based on token
- [x] 5 bottom tabs
- [x] Push notifications (foreground)
- [x] Push notifications (background)
- [x] Push notifications (killed state)
- [x] Notification screen redirection
- [x] Custom notification payload handling
- [x] App icon configuration guide
- [x] Clean folder structure

## 🚨 Troubleshooting

### iOS Build Issues
```bash
cd ios
rm -rf Pods Podfile.lock
bundle exec pod install
cd ..
npm run ios
```

### Android Build Issues
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Metro Bundler Issues
```bash
npm start -- --reset-cache
```

## 📝 License

This is a sample project for learning purposes.

## 👨‍💻 Development

To modify the app:
1. Edit screens in `src/screens/`
2. Update navigation in `src/navigation/`
3. Modify services in `src/services/`
4. Update types in `src/types/`

Hot reload is enabled by default for fast development.
