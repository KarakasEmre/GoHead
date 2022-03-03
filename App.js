import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';


export default function App() {

  const[todoItem, setTodoItem] = useState('');
  const[getTodoList, setTodoList] = useState([]);

  const addTodoList = () =>{
    setTodoList([...getTodoList , todoItem]);
    console.log(getTodoList)
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='Enter Todo Item'
        style={styles.TextInput}
         onChangeText={text => setTodoItem(text)}
        value={todoItem}
        />
        <Button title='Add Todo' onPress={addTodoList}></Button>
      </View>
      <ScrollView style={{maxHeight : 250}}>
      <View>
      {getTodoList.map(todo => <View key={todo} style={styles.TodoListItem}><Text>{todo}</Text></View>)}
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : 60,
  
  },
  TextInput:{
    color: "red",
    borderColor: "black",
    borderWidth : 1,
    padding : 10 , 
    marginBottom : 10
  },
  TodoListItem:{
    marginTop: 10,
    padding:5,
    color: 'white',
    borderWidth : 1,
    backgroundColor : 'grey'
  }
});
