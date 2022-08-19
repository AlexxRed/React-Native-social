import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import {useRoute} from './router';


const loadFonts = async () => {
  await Font.loadAsync({
    "DynaPuff": require("./assets/fonts/static/DynaPuff/DynaPuff-Regular.ttf"), 
  });
};




export default function App() {
  const [isReady, setIsReady] = useState(false);

  const routing = useRoute(true)

  if (!isReady) {
    return <AppLoading
     startAsync={loadFonts} 
     onFinish={() => setIsReady(true)}
     onError={console.warn}
     />
}

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}


