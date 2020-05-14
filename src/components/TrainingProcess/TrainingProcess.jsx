import React, {useContext, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import {Text, Button} from "react-native-elements";
import {Context as TrainingProcessContext} from "../../contexts/TrainingProcessContext";
import TrainingTimer from "./components/TrainingTimer";
import TrainingProgress from "./components/TrainingProgress";
import {StackActions} from "@react-navigation/native";
import {useNavigation} from '@react-navigation/native';

const TrainingProcess = ({actions}) => {
    const navigation = useNavigation();
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

    const goToResultScreen = ({actions, rested}) => {
        console.warn({actions, rested});

        navigation.dispatch(
            StackActions.replace('Training Result', {
                actions: actions,
                rested: rested
            })
        );
    };

    const onNextBtnPress = () => {
        if (state.leftActions.length > 1) {
            nextAction();
        } else {
            nextAction();
            const actions = state.doneActions.filter(a => a.type === 'training');
            const rested = state.doneActions.filter(a => a.type === 'resting');

            goToResultScreen({actions, rested});
        }
    }

    return (
        <View style={styles.view}>
            <TrainingProgress leftActions={state.leftActions.length}
                              doneActions={state.doneActions.length}
            />

            <TrainingTimer/>

            {/*{*/}
            {/*    state.doneActions.map((a, k) =>*/}
            {/*        <Text key={a.name + k}>{a.name} | {a.time} | {a.type === 'resting' ? a.rest : 'none'}</Text>)*/}
            {/*}*/}
            {/*<Text>_________________________</Text>*/}
            {/*{*/}
            {/*    state.leftActions.map((a, k) =>*/}
            {/*        <Text*/}
            {/*            key={a.name + k}>{a.name} | {a.time ? a.time : 'none'} | {a.type === 'resting' ? a.rest : 'none'}</Text>)*/}
            {/*}*/}

            <View style={{width: '100%', alignItems: 'center'}}>
                <Text h1 h1Style={styles.blue}>
                    {state.leftActions.length ? state.leftActions[0].name : null}
                </Text>
                <Text h2 h2Style={styles.blue}>
                    {
                        state.leftActions.length && state.leftActions[0].repeats ?
                            state.leftActions[0].repeats + ' repetitions' : null
                    }
                    {
                        state.leftActions.length &&
                        state.leftActions[0].rest &&
                        state.leftActions[0].type === 'resting' ?
                            `Relax ${state.leftActions[0].rest} seconds` : null
                    }
                </Text>
            </View>

            <View style={styles.controls}>
                <Button title="<" disabled={state.doneActions.length === 0} onPress={previousAction}/>
                <Button title={state.timer.isActive ? 'Pause' : 'Start'} onPress={toggle}>
                </Button>
                <Button title=">" onPress={onNextBtnPress}/>

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
        marginHorizontal: 50
    },
    blue: {
        color: '#2089DC'
    }
});

export default TrainingProcess;
