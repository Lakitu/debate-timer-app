// this is the file that runs the timer and the next speech button
import React from 'react'
import {Timer} from './components/Timer'
import {Button, View} from "react-native";

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            speechNum: 0,
        }
    }

    nextSpeech() {
        console.log(this.state);
        this.setState((prevState) => ({
                speechNum: prevState.speechNum + 1,
            })
        )
    }

    render() {
        console.log(this.props.times[this.state.speechNum])
        return (
            <View style={this.props.container}>
                <Timer time={this.props.times[this.state.speechNum]} styles={this.props.style}/>
                <Button
                    onPress={() => {
                        this.setState((prevState) => ({
                            speechNum: prevState.speechNum+1,
                        })
                    )}} // when clicked, move to the next speech
                    title="Next Speech"
                    style={this.props.style.nextSpeechButton}
                />
            </View>
        )
    }
}