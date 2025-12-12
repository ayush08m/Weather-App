🌤️ React Native Weather App

A modern and polished Weather App built using React Native + Expo, featuring real-time weather updates, fast Axios-based API requests, beautiful UI built with twrnc (Tailwind), smooth Heroicons, and an optimized debounced search for better performance.

The app demonstrates clean architecture, reusable components, and mobile-optimized UI suitable for both Android and iOS.

🚀 Features

| Feature                            | 
| ---------------------------------- | 
| 🌦 **Real-time Weather Data**      | 
| 🔍 **Debounced City Search**       | 
| 🎨 **Modern UI with twrnc**        |
| 🖼 **Heroicons Integration**       | 
| ⚡ **Fast API Requests with Axios** |
| 🛡 **SafeAreaView Support**        | 
| 📱 **Cross-Platform Support**      | 
| 🌍 **Global Location Support**     | 


📢 Important Notice About Weather APIs
❗ WeatherAPI.com is NOT completely free

WeatherAPI provides only a 21-day free trial for most features.
After that, the app will stop working unless you upgrade to a paid plan.

✔ Recommended: Open-Meteo (100% Free)

No API Key required

Unlimited usage

Perfect for learning, personal projects, and even production

This project is configured to use Open-Meteo by default to avoid billing issues.

🛠 Tech Stack

| Technology / Library                | Purpose                                         |
| ----------------------------------- | ----------------------------------------------- |
| **React Native (Expo)**             | Core framework for building the app.            |
| **Axios**                           | Fast, promise-based HTTP requests.              |
| **twrnc (Tailwind for RN)**         | Styling with Tailwind-like syntax.              |
| **Heroicons**                       | Clean icons for UI and weather visuals.         |
| **lodash.debounce**                 | Optimizes search input to reduce API calls.     |
| **react-native-safe-area-context**  | Handles notches, safe zones, and layout safety. |
| **React Navigation (Native Stack)** | Screen navigation & routing.                    |
| **Open-Meteo / WeatherAPI**         | Weather data source (Open-Meteo recommended).   |




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
![3](https://github.com/user-attachments/assets/364d1771-7ee2-44c7-93ba-064b4c4ae2e1)
![5](https://github.com/user-attachments/assets/6fa1dde2-d2cf-4de9-8ed2-a9d6968b7124)
![4](https://github.com/user-attachments/assets/faef16ea-be4c-4d59-8c24-f5c254a7e34a)
![2](https://github.com/user-attachments/assets/d77e776b-ab1f-4c89-836b-f7d345ffde08)



