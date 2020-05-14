import React, {useContext, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Button} from "react-native-elements";
import { Context as TrainingProcessContext } from "../../contexts/TrainingProcessContext";
import TrainingTimer from "./components/TrainingTimer";
import TrainingProgress from "./components/TrainingProgress";

const TrainingProcess = ({actions}) => {
    const {
        state,
        reset,
        toggle,
        setLeftActions,
        nextAction,
        previousAction
    } = useContext(TrainingProcessContext);

    useEffect(() => {
        setLeftActions(actions);
    }, []);

    const onPrevBtnPress = () => {
        if (state.timer.seconds !== 0) {
            reset();
        } else {
            previousAction();
        }
    }

    return (
        <View style={styles.view}>
            <TrainingProgress leftActions={state.leftActions.length}
                              doneActions={state.doneActions.length}
            />

            <TrainingTimer/>

            {
                state.doneActions.map((a, k) =>
                <Text key={a.name + k}>{a.name} | {a.time} | {a.type}</Text>)
            }
            <Text>_________________________</Text>
            {
                state.leftActions.map((a, k) =>
                <Text key={a.name + k}>{a.name} | {a.time ? a.time : 'none'} | {a.type}</Text>)
            }


            <View style={{width: '100%' , backgroundColor: 'powderblue'}}>
                <Text>{state.leftActions.length ? state.leftActions[0].name : null}</Text>
            </View>

            <View style={styles.controls} >
                <Button title="Prev" onPress={previousAction}/>
                <Button title={state.timer.isActive ? 'Pause' : 'Start'} onPress={toggle}>
                </Button>
                <Button title="Next" onPress={nextAction}/>

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
