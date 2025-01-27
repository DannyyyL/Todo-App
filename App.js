import React, { useState} from 'react';
import { ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import AddTodo from './components/AddTodo.js';
import Checkbox from './components/Checkbox.js';
import ColorChange from './components/ColorChange.js';

export default function App() {
  const [todoCount, setTodoCount] = useState(1); // Initialize with 1 AddTodo component
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handleAddTodo = () => {
    if (todoCount < 10){
      setTodoCount(todoCount + 1);
    }
  };

  const deleteTodo = () => {
    if (todoCount != 0){
      setTodoCount(todoCount - 1);
    }
  };

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <ScrollView style={{ backgroundColor: backgroundColor }} contentContainerStyle={styles.container}>
      <View style={styles.colorchange}>
        <ColorChange color="yellow" onPress={changeBackgroundColor} />
        <ColorChange color="orange" onPress={changeBackgroundColor} />
        <ColorChange color="dodgerblue" onPress={changeBackgroundColor} />  
        <ColorChange color="white" onPress={changeBackgroundColor}/>
        <ColorChange color="#6FC" onPress={changeBackgroundColor}/>
      </View>
      <Text style={styles.title}>To-do List 📝</Text>
      <Button
        title="Press On Me To Do More"
        style={{width: '20%', height: 100, backgroundColor: "#555"}}
        onPress={handleAddTodo}
        color="green"
      />
      <Button
        title="Press On Me To Do Less"
        style={{width: '20%', height: 100}}
        onPress={deleteTodo}
        color="red"
      />
      {[...Array(todoCount)].map((_, index) => (
        <View key={index} style={styles.row}>
          <View style={{ marginRight: 5 }}> 
            <AddTodo/>
          </View>
          <Checkbox/>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  colorchange: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    //top: 50,
    //left: 50,
    //position: 'absolute',
  }
});
