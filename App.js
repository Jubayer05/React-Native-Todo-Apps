import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    {text: "Buy Mobile", id: "1"},
    {text: "Take my personal professional photo", id: "2"},
    {text: "Update linkedin profile", id: "3"},
  ])

  return (
    <View style={styles.container}>
     <Header/>
      <View style={styles.content}>
        {/* TO FORM */}
        <View style={styles.list}>
          <FlatList 
            data={todos} 
            keyExtractor={el=> el.id} 
            renderItem={({item}) => (
            <Text>{item.text}</Text>
          )} />
        </View>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: { 
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
