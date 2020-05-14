import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrainingListScreen from "./src/screens/TrainingListScreen";
import TrainingProcessScreen from "./src/screens/TrainingProcessScreen";
import TrainingResultScreen from "./src/screens/TrainingResultScreen";

const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Training List" component={TrainingListScreen}/>
                <Stack.Screen name="Training" component={TrainingProcessScreen} />
                <Stack.Screen name="Training Result" component={TrainingResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    trainingList: {
        flex: 1,
        margin: 10
    }
});
