import React from "react";
import { View, Text } from "react-native";
import { GlobalStyles } from "../styles/global";
export default function About() {
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.titleText}>About screen</Text>
        </View>
    )
}
