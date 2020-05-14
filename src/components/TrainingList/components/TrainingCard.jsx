import React from 'react';
import {Button, Text} from 'react-native-elements';
import {ImageBackground, View, StyleSheet, TouchableOpacity} from "react-native";
import Placeholder from "../../../../assets/trainings/placeholder.jpg"

const showIfCustom = (value) => {
    if (value === true) {
        return (
            <View style={styles.customSign}>
                <Text style={styles.text}>Custom</Text>
            </View>);
    }
}

// trainingPreview = { name: sting, description: string, image: image }
export default ({trainingPreview, onPress}) => {

    return (
        <TouchableOpacity onPress={() => {
            onPress ? onPress(trainingPreview) : null
        }}>
            <View style={[styles.view]}>
                <ImageBackground source={trainingPreview.image || Placeholder}
                                 style={styles.image}>

                    { showIfCustom(trainingPreview.custom) }

                    <View style={styles.darkView}>
                        <Text h3 style={styles.text}>
                            {trainingPreview.name}
                        </Text>
                        <Text style={styles.text}>
                            {trainingPreview.description}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    view: {
        marginTop: 10,
        borderRadius: 50,
        height: 200,
    },
    darkView: {
        backgroundColor: 'rgba(52,52,52,0.8)',
        padding: 10,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    customSign: {
        backgroundColor: 'rgba(52,52,52,0.8)',
        padding: 10,
        position: 'absolute',
        right: 5,
        top: 5,
        borderRadius: 10
    },
    image: {
        overflow: 'hidden',
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
    text: {
        color: 'white',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});
