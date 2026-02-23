# AwesomeProject - Production React Native App 🚀

A complete production-style React Native application with authentication, navigation, and push notifications.

## 📱 What's Included

✅ **Splash Screen** - Native splash screen while checking auth  
✅ **Token-Based Authentication** - Login with persistent storage  
✅ **Smart Navigation** - Auto-switches between Auth & Main stacks  
✅ **5 Bottom Tabs** - Home, Search, Notifications, Profile, Settings  
✅ **Push Notifications** - Works in foreground/background/killed states  
✅ **Deep Linking** - Notifications redirect to specific screens  
✅ **Clean Architecture** - Professional folder structure  
✅ **TypeScript** - Fully typed for safety  
✅ **Linting** - ESLint configured and passing  

---

## 🚀 Quick Start

### Run in 3 Steps:

```bash
# 1. Start Metro Bundler
npm start

# 2. Run on iOS (new terminal)
npm run ios

# OR Run on Android (new terminal)
npm run android

# 3. Login with any email + password (6+ chars)
```

**See [QUICK_START.md](./QUICK_START.md) for detailed quick start guide.**

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| **[QUICK_START.md](./QUICK_START.md)** | Get started in 3 steps |
| **[PROJECT_README.md](./PROJECT_README.md)** | Complete project documentation |
| **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** | Assignment completion details |
| **[APP_ICON_GUIDE.md](./APP_ICON_GUIDE.md)** | How to customize app icons |

---

## 🎯 Assignment Features

All requirements implemented:

| Feature | Status | Details |
|---------|--------|---------|
| Splash Screen | ✅ | Shows while checking auth token |
| Login Screen | ✅ | Email + Password with validation |
| Token Storage | ✅ | AsyncStorage for persistence |
| Auth Navigation | ✅ | Auto-switches Auth ↔ Main stacks |
| 5 Bottom Tabs | ✅ | Home, Search, Notifications, Profile, Settings |
| Push Notifications | ✅ | Foreground, Background, Killed states |
| Screen Redirection | ✅ | Custom payload handling |
| App Icon | ✅ | Guide provided for customization |
| Persistent Login | ✅ | Token persists across restarts |
| Clean Structure | ✅ | Professional folder organization |

---

## 📁 Project Structure

```
src/
├── navigation/          # Navigation setup
│   ├── RootNavigator.tsx
│   ├── AuthNavigator.tsx
│   └── MainNavigator.tsx
├── screens/            # All screens
│   ├── auth/
│   │   └── LoginScreen.tsx
│   └── main/
│       ├── HomeScreen.tsx
│       ├── SearchScreen.tsx
│       ├── NotificationsScreen.tsx
│       ├── ProfileScreen.tsx
│       └── SettingsScreen.tsx
├── services/           # Business logic
│   ├── authService.ts
│   └── notificationService.ts
├── types/              # TypeScript definitions
├── utils/              # Utilities
└── components/         # Reusable components
```

---

## 🧪 Test Features

### 1. Test Persistent Login
1. Login with any email + 6+ char password
2. Close app completely
3. Reopen → Automatically logged in! ✨

### 2. Test Push Notifications
1. Go to Home tab after login
2. Tap "Send notification → Search"
3. Notification appears
4. Tap it → Navigates to Search tab 🎯

### 3. Test All Tabs
- **Home**: Dashboard with notification testing
- **Search**: Live search filtering
- **Notifications**: Notification list
- **Profile**: User profile info
- **Settings**: App settings + Logout

---

## 🔧 Technologies

- **React Native** 0.84.0
- **React Navigation** 7.x (Stack + Tabs)
- **AsyncStorage** - Persistent storage
- **Notifee** - Push notifications
- **TypeScript** - Type safety
- **React Native Screens** - Native performance

---

## 📦 What You Get

```bash
npm install              # All dependencies installed ✅
iOS Pods installed      # CocoaPods configured ✅
Android configured      # Gradle setup complete ✅
TypeScript ready        # Fully typed ✅
ESLint passing         # No errors ✅
```

---

## 🎨 Customization

### Change App Colors
Edit `src/utils/colors.ts`

### Add New Screens
1. Create in `src/screens/`
2. Add to navigation in `src/navigation/`

### Replace App Icon
See [APP_ICON_GUIDE.md](./APP_ICON_GUIDE.md)

### Add Real API
Update `src/services/authService.ts` with your API calls

---

## 🐛 Troubleshooting

### Metro Issues
```bash
npm start -- --reset-cache
```

### iOS Build Issues
```bash
cd ios && rm -rf Pods Podfile.lock && bundle exec pod install && cd ..
```

### Android Build Issues
```bash
cd android && ./gradlew clean && cd ..
```

---

## ✨ Key Highlights

1. **Production-Ready Architecture**
   - Clean separation of concerns
   - Scalable folder structure
   - Type-safe with TypeScript

2. **Seamless User Experience**
   - Smooth animations
   - Loading states
   - Error handling
   - Persistent login

3. **Modern Tech Stack**
   - React Navigation v7
   - Latest React Native 0.84
   - Notifee for notifications
   - AsyncStorage for persistence

4. **Complete Documentation**
   - Quick start guide
   - Full project docs
   - App icon guide
   - Implementation summary

---

## 📞 Support

Having issues? Check:
1. [QUICK_START.md](./QUICK_START.md) - Quick solutions
2. [PROJECT_README.md](./PROJECT_README.md) - Detailed docs
3. Troubleshooting section above

---

## 🎓 Learning Resources

This project demonstrates:
- Authentication flows
- Navigation patterns  
- State management
- Push notifications
- Native configuration
- TypeScript best practices
- Clean code architecture

---

## 📝 License

This is a sample project for learning purposes.

---

**Built with ❤️ using React Native 0.84.0**

*All assignment requirements completed and tested ✅*
