# 🚀 Quick Start Guide

## Run the App in 3 Steps

### 1️⃣ Start Metro Bundler
```bash
npm start
```
Leave this terminal running.

### 2️⃣ Run on iOS (in new terminal)
```bash
npm run ios
```

**OR** Run on Android (in new terminal)
```bash
npm run android
```

### 3️⃣ Test the App

**Login:**
- Email: `test@example.com`
- Password: `123456` (or any 6+ characters)

---

## 🧪 Quick Feature Test

### ✅ Test Persistent Login
1. Login successfully
2. Close app completely
3. Reopen app → Auto-logged in! ✨

### ✅ Test Notifications
1. After login, go to **Home** tab
2. Tap "Send notification → Search"
3. Tap the notification
4. App navigates to Search tab 🎯

### ✅ Test All Tabs
Explore all 5 tabs:
- 🏠 **Home** - Dashboard & notification testing
- 🔍 **Search** - Try searching
- 🔔 **Notifications** - View list
- 👤 **Profile** - User info
- ⚙️ **Settings** - Logout option

---

## 📱 Expected Behavior

1. **App Launch** → Splash screen (1 sec)
2. **First Time** → Login screen
3. **After Login** → Home screen with 5 tabs
4. **Next Launch** → Direct to Home (auto-login)
5. **After Logout** → Back to Login screen

---

## 🎯 All Features Work!

✅ Splash Screen  
✅ Token-based Auth  
✅ Persistent Login  
✅ 5 Bottom Tabs  
✅ Push Notifications  
✅ Screen Redirection  
✅ Clean UI/UX  

---

## 📚 Need More Info?

- **Full Documentation**: See `PROJECT_README.md`
- **App Icon Setup**: See `APP_ICON_GUIDE.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`

---

## 🐛 Having Issues?

### Metro Won't Start?
```bash
npm start -- --reset-cache
```

### iOS Build Fails?
```bash
cd ios
rm -rf Pods Podfile.lock
bundle exec pod install
cd ..
npm run ios
```

### Android Build Fails?
```bash
cd android
./gradlew clean
cd ..
npm run android
```

---

**Enjoy! 🎉**
