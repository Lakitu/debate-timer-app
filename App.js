import React, {Component} from 'react';
import { View } from 'react-native';
import {TimerPage} from './timerPage'
import {styles, timerStyles} from './styles'
import {loadAsync} from "expo-font";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      host: true,
      room: "abcde",
    }
  }

  async componentDidMount() {
    try {
      await loadAsync({
        RobotoMono: require('./assets/fonts/RobotoMono-VariableFont_wght.ttf'),
      }); // loads the font
    } catch {} // in case the font doesn't work
  }

  render() {
    return (
        <View style={styles.container}>
          <TimerPage times = {times[0]} style={timerStyles} host={this.state.host} room={this.state.room}/>
        </View>
        )
  }
}

export default App;

const times = [
  [ // CDA times
    ["A1C", 6],["A1 CX", 3], ["N1C", 6],["N1 CX", 3], ["A2C", 6],["A2 CX", 3], ["N2C", 6],["N2 CX", 3],
    ["N1R", 4], ["A1R", 4], ["N2R", 4], ["A2R", 4]
  ],
]