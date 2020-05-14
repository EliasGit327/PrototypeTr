import React, {useContext, useEffect, useState} from "react";
import {View} from "react-native";
import {Button, Text} from "react-native-elements";
import { Context as TrainingProcessContext } from "../../../contexts/TrainingProcessContext";


const TrainingTimer = ({}) => {
    const { state, setSeconds } = useContext(TrainingProcessContext);

    useEffect(() => {
        let interval = null;
        if (state.timer.isActive) {
            interval = setInterval(() => {
                setSeconds(state.timer.seconds + 1);
            }, 1000);
        } else if (!state.timer.isActive && state.timer.seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [state.timer.isActive, state.timer.seconds]);

    return(
        <View>
            <Text h3>Timer: {state.timer.seconds}</Text>
        </View>
    )
}

export default TrainingTimer;
