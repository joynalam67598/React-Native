import { useState } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Alert,
  Keyboard,
  TouchableWithoutFeedback, 
} from 'react-native';
import AddTodoForm from './components/AddTodoForm';
import Header from './components/header';
import SandBox from './components/SandBox';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
  ])

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    if (text.length > 5) {
      setTodos(
      [{
        text: text, key: Math.random().toString()
      },...todos])
    }
    else {
      Alert.alert("OPPS!", "Todos must be 5 character long", [
        { text: "Understand", onPress: () => console.log('alert closed')}
      ])
    }
    
  }


  return (
    // <SandBox></SandBox>
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
        {/*Header*/}
        <Header />
        <View style={styles.content}>
            {/*To do form*/}
            <AddTodoForm submitHandler={submitHandler}/>
            <View style={styles.list}>
            {/*List*/}
              <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
                )}
              />
            
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex:1
  },
  list: {
    flex:1,
    marginTop: 20,
    
  }
  
});
