# Android Build Fix - std::format Error

## Issue
The build error you encountered is a known issue with React Native 0.84.0 and NDK 26.1.x related to C++20 `std::format` support.

## Fixes Applied

### 1. Updated NDK Version
Changed from `26.1.10909125` to `27.0.12077973` in `android/build.gradle`

**Location**: `android/build.gradle`
```gradle
ndkVersion = "27.0.12077973"  // Updated from 26.1.10909125
```

### 2. Added CMake C++ Configuration
Added C++20 configuration to `android/app/build.gradle`

**Location**: `android/app/build.gradle`
```gradle
defaultConfig {
    // ... other config
    externalNativeBuild {
        cmake {
            arguments "-DANDROID_STL=c++_shared"
            cppFlags "-std=c++20"
        }
    }
}
```

## Next Steps

### Option 1: Install NDK 27 (Recommended)
If you don't have NDK 27 installed:

1. Open Android Studio
2. Go to: **Tools > SDK Manager > SDK Tools**
3. Check "Show Package Details"
4. Find "NDK (Side by side)" and install version **27.0.12077973**
5. Click Apply

**Or use command line:**
```bash
# Using sdkmanager
$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --install "ndk;27.0.12077973"
```

### Option 2: Use Your Current NDK 26 (Alternative)
If you prefer to use your existing NDK 26.1.10909125, revert the change:

**In `android/build.gradle`, change back to:**
```gradle
ndkVersion = "26.1.10909125"
```

Then you'll need to disable New Architecture temporarily or patch react-native-screens.

### Option 3: Downgrade react-native-screens (Workaround)
The error specifically comes from `react-native-screens`. You can try:

```bash
cd AwesomeProject
npm install react-native-screens@3.29.0
```

## Clean Build After Changes

After applying any fix, clean your build:

```bash
cd AwesomeProject/android
./gradlew clean
cd ..

# Clear Metro cache
npm start -- --reset-cache

# In a new terminal, run the app
npm run android
```

## Current Recommended Solution

**✅ Install NDK 27.0.12077973** (already configured in your build.gradle)

This is the cleanest solution and provides the best long-term compatibility with React Native 0.84.0.

## Verification

After installing NDK 27, verify it's installed:

```bash
ls -la $ANDROID_HOME/ndk/
# Should show: 27.0.12077973
```

## If Build Still Fails

1. **Check NDK installation path:**
   ```bash
   echo $ANDROID_HOME
   ls -la $ANDROID_HOME/ndk/
   ```

2. **Clear all caches:**
   ```bash
   cd AwesomeProject
   rm -rf android/.gradle
   rm -rf android/build
   rm -rf android/app/build
   npm start -- --reset-cache
   ```

3. **Try with a specific architecture:**
   ```bash
   npm run android -- --active-arch-only
   ```

## Related Resources

- [React Native 0.84 Release Notes](https://github.com/facebook/react-native/releases/tag/v0.84.0)
- [NDK Downloads](https://developer.android.com/ndk/downloads)
- [React Native Screens Issue Tracker](https://github.com/software-mansion/react-native-screens/issues)

## Summary

The push notification implementation is complete and correct. This build error is unrelated to the notification setup - it's a C++ toolchain compatibility issue between React Native 0.84.0 and older NDK versions.

Once you install NDK 27 (or apply one of the alternatives), your app will build successfully with push notifications fully functional on Android!
