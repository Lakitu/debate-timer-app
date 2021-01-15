import React from 'react';
import { View } from 'react-native';
import {Main} from './Main'
import {styles, timerStyles} from './styles'
import AppLoading from 'expo-app-loading'
import {useFonts} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    'RobotoMono': require('./assets/fonts/RobotoMono-VariableFont_wght.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Main times = {times[0]} style={timerStyles}/>
    </View>
  );
}

const times = [
  [ // CDA times
    ["A1C", 6],["A1 CX", 3], ["N1C", 6],["N1 CX", 3], ["A2C", 6],["A2 CX", 3], ["N2C", 6],["N2 CX", 3],
    ["N1R", 4], ["A1R", 4], ["N2R", 4], ["A2R", 4]
  ],
]