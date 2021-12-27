import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("......");

  const handelChange = () => {
    setName("Azisha");
  }

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.text}>Hello Zia, What is your girlfriend name?</Text>
      </View>
      <View style={styles.answer}>
        <Text style={styles.text}>Her name is {name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Answer" onPress={handelChange}  />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    backgroundColor: 'blue',
    padding:20,
  },
  text: {
    fontWeight:'bold',
    color:'white',
  },
  answer: {
    marginTop:20,
    padding:20,
    backgroundColor:'green',
  },
  buttonContainer: {
    marginTop:20,
  }
});
