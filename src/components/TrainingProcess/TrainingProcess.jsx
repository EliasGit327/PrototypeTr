import React, {useContext, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Button} from "react-native-elements";
import { Context as TrainingProcessContext } from "../../contexts/TrainingProcessContext";
import Timer from "./components/Timer";

const TrainingProcess = ({training}) => {

    useEffect(() => {
        context.setExercises(training.exercises);
    }, []);

    const context = useContext(TrainingProcessContext);

    return (
        <View style={styles.view}>
            <Timer/>

            <Text>{context.state.exercises.length}</Text>

            <View style={{width: '100%' , backgroundColor: 'powderblue'}}>
                <Text>Current training</Text>
            </View>

            <View style={{width: '100%' , backgroundColor: 'powderblue'}}>
                <Text>Clock</Text>
            </View>

            <View style={{width: '100%', height: 200, backgroundColor: 'skyblue'}}>
                <Text>Image</Text>
            </View>
            <View style={styles.controls} >
                <Button title="Prev"/>
                <Button title="Start"/>
                <Button title="Next"/>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    controls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
        marginHorizontal: 10

    }
});

export default TrainingProcess;
