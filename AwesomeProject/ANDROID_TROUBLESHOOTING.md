# Android Build Troubleshooting Guide

## Current Issue: NDK Error

The Android build is failing due to a corrupted NDK installation. Here are the solutions:

---

## Solution 1: Use Recommended NDK Version (Applied)

I've updated `android/build.gradle` to use NDK version `26.1.10909125` instead of `27.1.12297006`.

**Status**: Applied ✅

---

## Solution 2: Install/Reinstall NDK via Android Studio

### Steps:
1. Open **Android Studio**
2. Go to **Preferences** (macOS) or **Settings** (Windows/Linux)
3. Navigate to **Appearance & Behavior** → **System Settings** → **Android SDK**
4. Click **SDK Tools** tab
5. Check **NDK (Side by side)**
6. Select version **26.1.10909125** or latest stable
7. Click **OK** to install
8. Restart Android Studio

---

## Solution 3: Install NDK via Command Line

```bash
# Using sdkmanager
~/Library/Android/sdk/cmdline-tools/latest/bin/sdkmanager "ndk;26.1.10909125"

# Or latest version
~/Library/Android/sdk/cmdline-tools/latest/bin/sdkmanager --install "ndk-bundle"
```

---

## Solution 4: Remove Corrupted NDK

```bash
# Remove the corrupted NDK
rm -rf ~/Library/Android/sdk/ndk/27.1.12297006

# Then install correct version via Android Studio (Solution 2)
```

---

## Solution 5: Skip NDK (Quick Test)

If you don't need native code compilation:

**Edit `android/gradle.properties`** and add:
```properties
android.ndkPath=
```

Then clean and rebuild:
```bash
cd android
./gradlew clean
cd ..
npm run android
```

---

## Solution 6: Use React Native Doctor

Run the diagnostic tool:
```bash
npx react-native doctor
```

This will check your environment and suggest fixes.

---

## Recommended Steps (In Order)

### 1. Wait for Current Build
Gradle 8.13 is downloading. Once complete, try:
```bash
cd android && ./gradlew clean
cd .. && npm run android
```

### 2. If Still Fails
Install NDK via Android Studio (Solution 2)

### 3. Alternative
Remove corrupted NDK folder (Solution 4)

---

## Quick Commands

### Clean Everything
```bash
cd android
rm -rf .gradle build app/build
./gradlew clean
cd ..
```

### Check Android Environment
```bash
npx react-native doctor
```

### Run Android
```bash
npm run android
```

---

## iOS Works Perfectly

While fixing Android, you can test the app on iOS:

```bash
# Terminal 1
npm start

# Terminal 2
npm run ios
```

All features work on iOS:
- ✅ Splash screen
- ✅ Login & authentication
- ✅ Navigation & tabs
- ✅ Push notifications
- ✅ Everything!

---

## Expected Android Build Time

- **First build**: 3-5 minutes (downloading Gradle, dependencies)
- **Subsequent builds**: 30-60 seconds

---

## Common Android Issues & Fixes

### Issue: Java Version
**Error**: `Unsupported Java version`  
**Fix**: Ensure Java 17 or 21 is installed
```bash
java -version  # Should show 17 or 21
```

### Issue: Android SDK Path
**Error**: `ANDROID_HOME not set`  
**Fix**: Add to `~/.zshrc` or `~/.bash_profile`:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Issue: Emulator Not Running
**Fix**: Start emulator first
```bash
# List emulators
~/Library/Android/sdk/emulator/emulator -list-avds

# Start emulator
~/Library/Android/sdk/emulator/emulator -avd <emulator_name>
```

---

## Support Resources

- **React Native Docs**: https://reactnative.dev/docs/environment-setup
- **React Native Doctor**: `npx react-native doctor`
- **Android SDK Manager**: Open Android Studio → SDK Manager

---

## Current Status

✅ **App Implementation**: Complete  
✅ **iOS Build**: Working  
⏳ **Android Build**: Fixing NDK issue  
📦 **Gradle 8.13**: Downloading  

Once Gradle finishes downloading and NDK is fixed, Android will work!

---

**Next Step**: Wait for Gradle download to complete, then run `npm run android`
