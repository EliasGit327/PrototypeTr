import React from 'react';
import {FlatList} from "react-native";
import TrainingCard from "./components/TrainingCard";

// trainingPreview = { name: sting, description: string, image: image }
// onPress: (trainingPreview) => {}
export default ({trainings, onPress}) => {
    return (
        <FlatList data={trainings}
                  renderItem={({item}) => (
                      <TrainingCard onPress={onPress} trainingPreview={item}/>
                  )}/>
    )
}
