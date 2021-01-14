import {StyleSheet} from "react-native";

export const timerStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
    },
    count: { //TODO: make the timer look sexy
        fontSize: 100,
        fontFamily: "Impact, sansSerif",
    },
})