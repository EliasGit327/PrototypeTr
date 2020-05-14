import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {Button, Text} from "react-native-elements";

const Timer = ({}) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return(
        <View>
            <Text h3>Timer: {seconds}</Text>
            <Button title={isActive ? 'Pause' : 'Start'}
                    onClick={toggle}>
            </Button>
        </View>
    )
}

export default Timer;
