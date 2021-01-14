import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Timer} from './Timer'

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      {/*<StatusBar style="auto" />*/}
      <Timer time={"6"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
