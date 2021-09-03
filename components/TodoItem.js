import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TodoItem = ({item,pressHandler}) => {


  return (
    <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.id)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb', 
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    
  }
})