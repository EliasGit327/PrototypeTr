import React from 'react';
import {Text} from 'react-native-elements';
import {ImageBackground, View, StyleSheet} from "react-native";
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import Placeholder from "../../../../assets/trainings/placeholder.jpg"

const checkIfCustom = (value) => value === true ? '*' : '';

// trainingPreview = { name: sting, description: string, image: image }
export default ({trainingPreview, onPress}) => {

    return (
        <TouchableOpacity onPress={() => {
            onPress ? onPress(trainingPreview) : null
        }}>
            <View style={styles.view}>
                <ImageBackground source={trainingPreview.image || Placeholder}
                                 style={styles.image}>

                    <View style={styles.darkView}>
                        <Text h3 style={styles.text}>
                            {trainingPreview.name + checkIfCustom(trainingPreview.custom)}
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
        minHeight: 250,
    },
    darkView: {
        backgroundColor: 'rgba(52,52,52,0.8)',
        padding: 10,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    image: {
        overflow: 'hidden',
        borderRadius: 10,
        width: '100%',
        height: '100%',

    },
    text: {
        color: 'white',
    }
});
