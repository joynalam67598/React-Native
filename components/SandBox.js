import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.contianer}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
            <Text style={styles.boxFive}>five</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        // flex:1,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems:'flex-start',
        paddingTop: 40,
        backgroundColor:'#ddd'
    },
    boxOne: {
        padding:10,
        backgroundColor:'violet'
    },
     boxTwo: {
        padding:20,
        backgroundColor:'gold'
    },
     boxThree: {
        padding:30,
        backgroundColor:'coral'
    },
      boxFour: {
        padding:40,
        backgroundColor:'skyblue'
    },
     boxFive: {
        padding:50,
        backgroundColor:'green'
    },
     
})