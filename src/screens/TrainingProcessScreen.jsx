import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from "react-native";
import TrainingProcess from "../components/TrainingProcess/TrainingProcess";
import {
    Context as TrainingProcessContext,
    Provider as TrainingProcessContextProvider
} from "../contexts/TrainingProcessContext";

const TrainingProcessScreen = ({route}) => {
    const { training } = route.params;
    const parsedTrainings = [];

    for(let i = 0; i < training.circles; i++) {
        training.exercises.forEach( t => {
            parsedTrainings.push({...t, type: 'training'});
            parsedTrainings.push({ name: 'Resting', rest: t.rest, type: 'resting'});
        });
        parsedTrainings.push({ name: 'Resting', rest: training.circleRest, type: 'resting'});
    }
    parsedTrainings.pop();
    parsedTrainings.pop();

    return (
        <View style={{flex: 1}}>
            <TrainingProcessContextProvider>
                <TrainingProcess actions={parsedTrainings}/>
            </TrainingProcessContextProvider>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrainingProcessScreen;

