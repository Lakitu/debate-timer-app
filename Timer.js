// Use React CS50 lecture to make timer
import {Text, StyleSheet} from 'react-native'
import React from 'react'

export class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            style: StyleSheet.create({
                container: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                count: {
                    fontSize: 100,
                    fontFamily: "Impact, sansSerif",
                },
            }),
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
            this.state.startTime = Date.now(); // calculates the time the timer starts
            this.state.endTime = Date.now() + this.state.timerLength; // gets the time the timer should end
            this.state.displayTime = this.timeToDisplay(this.state.endTime-Date.now()) // gets the time to display
            setInterval(() => { // runs every 1000 seconds
                this.setState(() => {
                    this.state.displayTime = this.timeToDisplay(this.state.endTime-Date.now())
                }, () => {
                    // this.forceUpdate(()=>{})
                })
            }, 100);
        })
    }

    render() {
        return(
            <Text StyleSheet={this.state.style.count}>{this.state.displayTime}</Text> //TODO: make this update at the correct time
        )
    }
}