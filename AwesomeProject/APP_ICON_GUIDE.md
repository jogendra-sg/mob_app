# App Icon Setup Guide

## Quick Setup with Online Tools

The easiest way to create app icons is using online generators:

### Recommended Tools:
1. **Icon Kitchen** (https://icon.kitchen/)
2. **App Icon Generator** (https://appicon.co/)
3. **MakeAppIcon** (https://makeappicon.com/)

### Steps:
1. Create or find a 1024x1024 PNG image for your app icon
2. Upload to any of the tools above
3. Download the generated icon sets
4. Follow platform-specific instructions below

---

## iOS Icon Setup

### Required Sizes:
- 20x20 (iPhone Notification 2x)
- 29x29 (iPhone Settings 2x)
- 40x40 (iPhone Spotlight 2x)
- 60x60 (iPhone App 2x)
- 76x76 (iPad App 1x)
- 83.5x83.5 (iPad Pro App 2x)
- 1024x1024 (App Store)

### Installation:
1. Open Xcode: `open ios/AwesomeProject.xcworkspace`
2. In Project Navigator, select `AwesomeProject`
3. Click `Images.xcassets` in the file list
4. Select `AppIcon`
5. Drag and drop your icon files into the appropriate slots
6. Build and run: `npm run ios`

---

## Android Icon Setup

### Required Sizes:
- **mdpi**: 48x48px
- **hdpi**: 72x72px
- **xhdpi**: 96x96px
- **xxhdpi**: 144x144px
- **xxxhdpi**: 192x192px

### Installation:
Replace the default icons in these folders:
```
android/app/src/main/res/
├── mipmap-mdpi/ic_launcher.png (48x48)
├── mipmap-hdpi/ic_launcher.png (72x72)
├── mipmap-xhdpi/ic_launcher.png (96x96)
├── mipmap-xxhdpi/ic_launcher.png (144x144)
└── mipmap-xxxhdpi/ic_launcher.png (192x192)
```

### For Round Icons:
Also replace these:
```
android/app/src/main/res/
├── mipmap-mdpi/ic_launcher_round.png
├── mipmap-hdpi/ic_launcher_round.png
├── mipmap-xhdpi/ic_launcher_round.png
├── mipmap-xxhdpi/ic_launcher_round.png
└── mipmap-xxxhdpi/ic_launcher_round.png
```

### Build and Test:
```bash
npm run android
```

---

## Design Tips

### Icon Design Best Practices:
1. **Simple**: Keep it clear and recognizable at small sizes
2. **Unique**: Make it stand out in the app store
3. **No Text**: Avoid text in icons (use imagery/symbols)
4. **Fill Space**: Use most of the canvas (leave small padding)
5. **Test**: Preview at different sizes

### Color Schemes:
- Use 2-3 colors maximum
- Ensure good contrast
- Consider dark mode variants
- Match your app's theme

### Common Mistakes to Avoid:
- ❌ Using gradients that don't scale well
- ❌ Too much detail that gets lost at small sizes
- ❌ Images with transparency issues
- ❌ Low resolution source images

---

## Current App Icon

The app currently uses default React Native icons. 

To replace them:
1. Create your custom icon (1024x1024)
2. Use an online generator (recommended)
3. Follow the platform-specific steps above
4. Rebuild your app

---

## Testing Your Icon

### iOS:
```bash
npm run ios
```
Check the home screen and app switcher.

### Android:
```bash
npm run android
```
Check the launcher and recent apps.

---

## Adaptive Icons (Android Only)

For modern Android (8.0+), you can create adaptive icons:

1. Create foreground and background layers
2. Place in `mipmap-anydpi-v26/`
3. Define in `ic_launcher.xml`

Example:
```xml
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background"/>
    <foreground android:drawable="@mipmap/ic_launcher_foreground"/>
</adaptive-icon>
```

This allows the system to apply different shapes (circle, square, rounded square) based on device manufacturer.
