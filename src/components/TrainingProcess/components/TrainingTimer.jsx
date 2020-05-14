import React, {useContext, useEffect, useState} from "react";
import {View, StyleSheet} from "react-native";
import {Button, Text} from "react-native-elements";
import { Context as TrainingProcessContext } from "../../../contexts/TrainingProcessContext";


const TrainingTimer = ({}) => {
    const { state, setSeconds, nextAction } = useContext(TrainingProcessContext);

    useEffect(() => {
        let interval = null;

        let leftAction = state.leftActions[0];
        if (leftAction && leftAction.type === 'resting' && state.timer.seconds >= leftAction.rest) {
            nextAction();
        }

        if (state.timer.isActive) {
            interval = setInterval(() => {
                setSeconds(state.timer.seconds + 1);
            }, 1000);
        }
        else if (!state.timer.isActive && state.timer.seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [state.timer.isActive, state.timer.seconds]);

    return(
        <View style={styles.view}>
            <View style={styles.circleView}>
                <Text h1 h1Style={styles.timer}>{state.timer.seconds}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    timer: {
        fontSize: 50,
        color: '#2089DC'
    },
    circleView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100,
        minWidth: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#2089DC'
    }
});

export default TrainingTimer;
