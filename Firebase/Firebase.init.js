
import { initializeApp } from "firebase/app";
import { initializeAuth ,getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: "AIzaSyCGcvgMnTSa4hjqJeDVjmTyC9_F_rEiN2o",
  authDomain: "dragon-news-57545.firebaseapp.com",
  projectId: "dragon-news-57545",
  storageBucket: "dragon-news-57545.appspot.com",
  messagingSenderId: "15574507444",
  appId: "1:15574507444:web:d997b9c2a9a8c3c0751ce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default auth ;