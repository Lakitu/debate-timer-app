import {StyleSheet} from "react-native";

export const timerStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 3,
    },
    count: {
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: "RobotoMono, Monospace",
    },
    finishedRed: {
        color: 'red',
    },
    finishedBlack: {
        color: 'black',
    },
    continuing: {
        color: "green",
    },
    nextSpeechButton: {
        color: "#2bc454",
    }
})

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});