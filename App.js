import React, {Component} from 'react';
import { View } from 'react-native';
import {Main} from './Main'
import {styles, timerStyles} from './styles'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
        <View style={styles.container}>
          <Main times = {times[0]} style={timerStyles}/>
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