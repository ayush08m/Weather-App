🌤️ React Native Weather App

A modern and polished Weather App built using React Native + Expo, featuring real-time weather data, Axios-powered API requests, Tailwind-style UI with twrnc, smooth animations, Heroicons, and debounced search for efficient API calls.

This app demonstrates clean architecture, reusable components, and mobile-optimized UI suitable for both Android and iOS.

🚀 Features

🌦 Real-time weather data (temperature, conditions, wind, etc.)

🔍 City search with debounce to avoid unnecessary API calls

🎨 twrnc (Tailwind for RN) → clean, responsive UI

🖼️ Heroicons for beautiful icons

⚡ Axios for fast, reliable API requests

📱 Works on Expo Go, Android, and iOS

🛡 SafeAreaView support for notch devices

🌎 Supports any global location




📢 Important Notice About Weather APIs

❗ WeatherAPI.com is NOT fully free

WeatherAPI provides only a 21-day free trial for most features.

After that, you must switch to a paid plan.

✔ Recommended: Open-Meteo (100% Free)

No API Key required

Unlimited usage

Perfect for learning & production apps

This project supports either API, but defaults to Open-Meteo to avoid billing issues.





🛠 Tech Stack

React Native (Expo)

Axios — API requests

twrnc — Tailwind-style styling

Heroicons — outline & solid icons

lodash.debounce — optimized search

react-native-safe-area-context

React Navigation (native stack)


🔧 API Setup
Using Open-Meteo (Default – No Key Needed):
https://api.open-meteo.com/v1/forecast?
latitude=28.6139&longitude=77.2090&current_weather=true

Using WeatherAPI.com (21-day trial):
Create account → https://www.weatherapi.com/

Replace inside weatherApi.js:
const API_KEY = "YOUR_API_KEY";
const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
⚠️ After 21 days, API will stop working unless upgraded.

Here are the Snap of App
![1](https://github.com/user-attachments/assets/535c03f9-10ea-469f-a0a5-d6d7c5d1b888)
![5](https://github.com/user-attachments/assets/6fe108a1-44f0-440c-b385-ca823759ef04)
![4](https://github.com/user-attachments/assets/e38dbbed-c542-40a9-854c-8b86451623aa)
![3](https://github.com/user-attachments/assets/364d1771-7ee2-44c7-93ba-064b4c4ae2e1)
![2](https://github.com/user-attachments/assets/d77e776b-ab1f-4c89-836b-f7d345ffde08)



