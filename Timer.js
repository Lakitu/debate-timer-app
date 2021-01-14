// Use React CS50 lecture to make timer
import {Text, View} from 'react-native'
import React from 'react'

export class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timerLength: 0,
            startTime: 0,
            endTime: 0,
            displayTime: this.timeToDisplay(this.props.time*60*1000),

        }
    }

    timeToDisplay(millis) {
        let actualSeconds = millis/1000
        let minutes = Math.floor(actualSeconds/60)
        let seconds = Math.floor(actualSeconds % 60)
        let displaySeconds = ("0" + (String)(seconds)).slice(-2);
        let tenths = Math.floor((millis/100)%10);
        let output = minutes+":"+displaySeconds+"."+tenths;
        return(output);
    }

    componentDidMount() {
        this.setState(() => {
            this.state.timerLength = this.props.time*60*1000;
        }, () => {
            this.setState(() => ({
                startTime: (Date.now()),
                endTime: Date.now() + this.state.timerLength,
                displayTime: this.timeToDisplay(this.state.endTime-Date.now())
            }))
            setInterval(() => { // runs every 1000 seconds
                this.setState(() => ({
                    displayTime: this.timeToDisplay(this.state.endTime-Date.now())
                }), () => {
                    // this.forceUpdate(()=>{})
                })
            }, 100);
        })
    }

    render() {
        console.log("re-rendered");
        return(
            <View style={this.props.styles.container}>
                <Text StyleSheet={this.props.styles.count}>{this.state.displayTime}</Text>
            </View>
        )
    }
}