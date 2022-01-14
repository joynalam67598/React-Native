import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:24,
    },
    textTitle: {
        fontFamily: 'nunito-bold',
        fontSize:24,
    }
});