import React from "react";
import { View, Text, Button } from "react-native";
import { GlobalStyles } from "../styles/global";

export default function ReviewDetails({navigation}) {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.titleText}>Review Details screen</Text>
            <Button title="Back to home" onPress={pressHandler}/>
        </View>
    )
}