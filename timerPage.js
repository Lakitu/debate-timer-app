// this is the file that runs the timer and the next speech button
import React from 'react'
import {Timer} from './components/Timer'
import {Next} from "./components/nextSpeechButton";
import {View, Text} from "react-native";
import io from "socket.io-client";

export class TimerPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            speechNum: 0,
            speechName: this.props.times[0][0]
        }
    }

    nextSpeech = () => {
        this.socket.emit('next', [this.props.room, this.state.speechNum+1, this.props.times[this.state.speechNum+1]]);
    }

    componentDidMount() {
        this.socket = io("127.0.0.1:3001"); // for some reason, this is sending itself twenty times
        this.socket.on("next", (msg) => {
            this.setState(() => ({
                speechNum: msg[1],
                speechName: msg[2][0]
            }))
        })
    }

    render() {
        if (this.props.host === true) { // if you are the host, then you see the next speech button
            console.log(this.state.speechNum)
            return (
                <View style={this.props.style.container}>
                    {/*<View style={this.props.style.container}>*/}
                        <Text style={this.props.style.speechName}>{this.state.speechName}</Text>
                    {/*</View>*/}
                    <Timer time={this.props.times[this.state.speechNum]} styles={this.props.style}/>
                    <Next nextSpeech={this.nextSpeech} style={this.props.style}/>
                </View>
            )
        } else { // if you aren't the host, then you don't get the next speech button
            return (
                <View style={this.props.container}>
                    <Timer time={this.props.times[this.state.speechNum]} styles={this.props.style}/>
                </View>
            )
        }
    }
}