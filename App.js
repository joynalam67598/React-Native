import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [students, setStudents] = useState([
    { name: "Joynal", roll: "C173050" },
    { name: "Zia", roll: "C173055" },
    { name: "Aziz", roll: "C173064" },
    { name: "Turan", roll: "C173065" },
    { name: "Tareq", roll: "C173069" },
    { name: "Riyad", roll: "C173072" },
    { name: "Jahid", roll: "C173061" },
    { name: "Habib", roll: "C173078" },
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          students.map(item => (
            <View key={item.roll}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
  },
  item: {
    marginTop: 20,
    padding:30,
    fontWeight: 'bold',
    fontSize:24,
    backgroundColor:"pink"
  },
});
