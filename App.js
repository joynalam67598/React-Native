import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handelChange = (e) => {
    value = e.target.value;
    
  }

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput style={styles.input}
        multiline
        placeholder='e.g. Joynal'
        name='name'
        onChangeText={(val) => setName(val)} />
      <Text>Enter Age:</Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        placeholder='e.g. 18'
        name='age'
        onChangeText={(val) => setAge(val)} />
      <Text>Name: {name}, Age: {age}</Text>
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
  input: {
    borderWidth:2,
    backgroundColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    color:'white'
  },
  text: {
    fontWeight:'bold',
    color:'white',
  },
  
  buttonContainer: {
    marginTop:20,
  }
});
