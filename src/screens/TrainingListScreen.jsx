import {NavigationContainer} from "@react-navigation/native";
import {View, ScrollView, StyleSheet, SafeAreaView} from "react-native";
import {Button, Divider, Text} from "react-native-elements";
import TrainingList from "../components/TrainingList/TrainingList";
import React from "react";

const trainings = [{
    name: 'Tabata',
    description: 'Всего за 10 минут этой высокоинтенсивной тренировки твой пульс достигнет максимума.',
    image: require('../../assets/trainings/tabata.jpg'),
    custom: false,
    exercises: [
        {name: 'Jumps', repeats: 10, rest: 10},
        {name: 'Hips', repeats: 20, rest: 15},
        {name: 'Sit downs', repeats: 15, rest: 10}
    ],
    circles: 3,
    circleRest: 60
}, {
    name: 'Second',
    description: 'Bla bla bla.',
    image: null,
    custom: true,
    exercises: [],

}, {
    name: 'Third',
    description: 'Bla bla bla bla bla bla.',
    image: null,
    custom: true,
    exercises: [],
}];

const TrainingListScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <TrainingList trainings={trainings} onPress={
                (t) => navigation.navigate('Training', {training: t})
            }/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default TrainingListScreen;
