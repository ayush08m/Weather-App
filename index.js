import { registerRootComponent } from 'expo';
// index.js (top)
import 'react-native-gesture-handler'; // MUST be before other navigation imports
import { enableScreens } from 'react-native-screens';
enableScreens(); // optional but recommended for better performance


import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
