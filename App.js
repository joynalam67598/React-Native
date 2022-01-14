import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
    'nunito-reguler': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});
  
export default function App() {
  const [fontLodded, setFontLodded] = useState(false);
  
  if (fontLodded) {
    return <Home />;
  } else {
    return <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontLodded(true)}
      onError={() => console.log('error')}
    />;
  }
  
}



