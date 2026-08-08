Expo LAN Starter Template

Purpose
- Prevent Expo Go download failures caused by localhost bundle URLs.
- Force Expo to advertise a phone-reachable LAN IP.

Files
- start-lan.js
- setup-lan.ps1

How to use in a brand new Expo project (Windows)
1. Copy this folder into your new project, for example as templates/expo-lan.
2. In PowerShell, run:
   PowerShell -ExecutionPolicy Bypass -File .\templates\expo-lan\setup-lan.ps1 -ProjectPath .
3. Start Expo with:
   npm run start:lan

Fully automated for every new Expo project (Windows)
1. From this workspace root, run:
   PowerShell -ExecutionPolicy Bypass -File .\templates\expo-lan\create-expo-project-with-lan.ps1 -ProjectName my-new-app
2. Optional: pass create-expo-app arguments, for example:
   PowerShell -ExecutionPolicy Bypass -File .\templates\expo-lan\create-expo-project-with-lan.ps1 -ProjectName my-new-app -CreateExpoArgs -- --template blank
3. Then run:
   cd .\my-new-app
   npm run start:lan

Expected result
- Expo prints: Metro waiting on exp://192.168.x.x:port
- It should not print exp://127.0.0.1:port

Notes
- If tunnel mode fails because of offline emulator, run adb kill-server or close the emulator.
- If a port is busy, allow Expo to choose the next port.
