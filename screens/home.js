import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../styles/global";

export default function Home() {
    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.titleText}>Home screen</Text>
        </View>
    )
}
