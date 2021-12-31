import { useState } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import AddTodoForm from './components/AddTodoForm';
import Header from './components/header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "a", key: 1 },
    { text: "b", key: 2 },
    { text: "c", key: 3 }
  ])

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    setTodos(
      [{
        text: text, key: Math.random().toString()
      },...todos])
  }


  return (
    <View style={styles.container}>
      {/*Header*/}
      <Header />
      <View style={styles.content}>
        <AddTodoForm submitHandler={submitHandler}/>
        {/*To do*/}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:40,
  },
  list: {
    marginTop:20
  }
  
});
