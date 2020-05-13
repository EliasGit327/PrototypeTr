import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Divider, Text} from 'react-native-elements';
import TrainingList from "./src/components/TrainingList/TrainingList";

const trainings = [{
    name: 'Tabata',
    description: 'Всего за 10 минут этой высокоинтенсивной тренировки твой пульс достигнет максимума. Каждая тренировка - это заряд энергии, бодрости, сил и отличного настроения.',
    image: require('./assets/trainings/tabata.jpg'),
    custom: false
}, {
    name: 'Second',
    description: 'Bla bla bla.',
    image: null,
    custom: true
}, {
    name: 'Third',
    description: 'Bla bla bla bla bla bla.',
    image: null,
    custom: true
}];

export default () => {
    return (
        <ScrollView style={styles.trainingList}>
            <Text h2>Training list</Text>
            <Divider/>

            <TrainingList trainings={trainings} onPress={(t) => console.warn(t)}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    trainingList: {
        flex: 1,
        margin: 10
    }
});
