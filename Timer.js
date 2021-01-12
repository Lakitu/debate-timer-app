// Use React CS50 lecture to make timer
import {Text, StyleSheet} from 'react-native'
import Constants from 'expo'

class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.props.style = StyleSheet.create({
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            },
            count: {
                fontSize: 48,
            },
        })
        this.state = {
            timerLength: 0,
            startTime: 0,
            endTime: 0,
            displayTime: 0,

        }
    }

    setTimer(time) {
        this.setState((prevState) => {
            timerLength: prevState.timerLength = time*60*1000 // converts minutes to milliseconds
        })
    }

    componentDidMount() {
        this.state.startTime = Date.now();
        this.state.endTime = Date.now() + this.state.timerLength;
        this.state.displayTime = (this.state.endTime-Date.now())/1000.
        setInterval(() => {
            this.setState((prevState) => {
                this.state.displayTime: (prevState.displayTime = (this.state.endTime-Date.now())/1000.)
            })
        }, 1000);
    }

    render() {
        return(
            <Text StyleSheet={this.props.style.count}></Text>
        )
    }
}