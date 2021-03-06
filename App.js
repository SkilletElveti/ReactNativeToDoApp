import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import ToDo from './components/Todo';
import AddToDoForm from './components/AddToDo';
import SandBox from './components/SandBox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy Coffee', key: '1' },
    { text: 'Create App', key: '2' },
    { text: 'Play on switch', key: '3' }
  ]);
  const handlerToDo = (id) => {
    const arr = todos.filter((to) => to.key != id)
    setTodos(arr)
  }
  const addTask = (text) => {
    console.log("PUSH")
    //console.log(text)
    setTodos((prevTodos) => {
      return [
        { text: text, key: todos.length + 1 },
        ...prevTodos
      ]
    })
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      //console.log("Dismissed KeyBoard")
    }}>
      <View style={styles.container}>

        <Header />
        <View style={styles.content}>

          <AddToDoForm addTaskHandler={addTask} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              
              renderItem={({ item }) => (
                <ToDo item={item} handler={handlerToDo} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
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
    flex:1,
    
    padding: 55
  },
  list: {
    flex:1,
    
    marginTop: 20,
    
  }
});



