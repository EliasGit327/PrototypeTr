import React, {useEffect} from 'react';
import {View, StyleSheet} from "react-native";
import TrainingProcess from "../components/TrainingProcess/TrainingProcess";
import { Provider as TrainingProcessContextProvider } from "../contexts/TrainingProcessContext";

const TrainingProcessScreen = ({route}) => {

    useEffect(() => {
    }, []);

    const { training } = route.params;

    return (
        <View style={{flex: 1}}>
            <TrainingProcessContextProvider>
                <TrainingProcess training={training}/>
            </TrainingProcessContextProvider>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrainingProcessScreen;

