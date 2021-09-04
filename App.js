import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Mobile", id: "1" },
    { text: "Take my personal professional photo", id: "2" },
    { text: "Update linkedin profile", id: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.id !== key);
    });
  };

  const handleSubmit = (newTodo) => {
    if (newTodo.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: newTodo, id: `${Math.random() * 999999999}` },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("Opps!!!", "Todos should be more than 3 characters long.", [
        { text: "I got it" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(el) => el.id}
              renderItem={({ item }) => (
                <TodoItem pressHandler={pressHandler} item={item} />
              )}
            />
          </View>
        </View>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
