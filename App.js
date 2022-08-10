import { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';

import AddToDo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoitem';

export default function App() {

  // Data object sample
  const [todos, setTodos] = useState([
    { text: "beli kopi",        key: "1" },
    { text: "membuat aplikasi", key: "2" },
    { text: "main di pantai",   key: "3" }
  ]);

  // Passing ke TodoItem sebagai props
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  // Passing ke AddTodo sebagai props
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { 
            text: text, 
            key: Math.random().toString() 
          },
          ...prevTodos
        ]
      });
        
    } else {

      
    }

  }

  return (
    <View style={styles.container}>
      {/* header  */}
      <Header />

      <View style={styles.content}>
        {/* todos form */}        
        <AddToDo submitHandler={submitHandler} />

        <View style={styles.list}>
          <FlatList 
            data={ todos }
            renderItem={({ item }) => (
              <TodoItem 
                item={ item }
                pressHandler={ pressHandler } 
              />
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
    flex: 1,
    padding: 40,
  },

  list: {
    flex: 1,
    marginTop: 20,
  }
});