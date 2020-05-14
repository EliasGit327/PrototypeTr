import React, {useContext} from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements";
import { Context as TrainingProcessContext } from "../../../contexts/TrainingProcessContext";


const TrainingProgress = ({doneActions, leftActions}) => {
    const { state } = useContext(TrainingProcessContext);

    const drawCells = () => {
        const cells = [];
        for (let i = 0; i < doneActions; i++) {
                cells.push(<View key={i} style={styles.doneAction}/>);
        }

        for (let i = doneActions; i < doneActions + leftActions; i++) {
            cells.push(<View key={i} style={styles.toDoAction}/>);
        }
        return cells;
    }

    return (
        <View style={{marginTop: 10}}>
            {/*<Text>Done actions: {state.doneActions.length}</Text>*/}
            {/*<Text>Left actions: {state.leftActions.length}</Text>*/}

            <View style={styles.mainView}>
                {drawCells()}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
        marginHorizontal: 10
    },
    toDoAction: {
        marginHorizontal: 5,
        backgroundColor: '#c0ccd5',
        height: 5,
        width: 5,
        borderRadius: 50
    },
    doneAction: {
        marginHorizontal: 5,
        backgroundColor: '#2089DC',
        height: 5,
        width: 5,
        borderRadius: 50
    }
});

export default TrainingProgress;
