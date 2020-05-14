import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from "react-native-elements";

const TrainingResultScreen = ({route}) => {
    const { actions, rested } = route.params;
    let spentTimeOnExercises = 0;
    let spentTimeOnResting = 0;
    actions.forEach(a => spentTimeOnExercises += a.time);
    rested.forEach(a => spentTimeOnResting += a.rest);
    const spentTime = spentTimeOnExercises + spentTimeOnResting;

    return (
        <SafeAreaView>
            <Text>{`Done ${actions.length} exercises.`}</Text>
            <Text>{`Rested ${rested.length} times.`}</Text>
            <Text>{`Spent time on exercises: ${spentTimeOnExercises} seconds.`}</Text>
            <Text>{`Spent time on resting: ${spentTimeOnResting} seconds.`}</Text>
            <Text>{`Spent time: ${spentTime} seconds.`}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrainingResultScreen;
