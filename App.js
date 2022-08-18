import React, {useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { 
// } from 'react-native';

import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';



const loadFonts = async () => {
  await Font.loadAsync({
    "DynaPuff": require("./assets/fonts/static/DynaPuff/DynaPuff-Regular.ttf"), 
  });
};




export default function App() {
  const [isReady, setIsReady] = useState(false)

  

  if (!isReady) {
    return <AppLoading
     startAsync={loadFonts} 
     onFinish={() => setIsReady(true)}
     onError={console.warn}
     />
}

  return (
    // <LoginScreen/>
    <RegisterScreen/>
  );
}

