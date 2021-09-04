import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const AddTodo = ({ handleSubmit }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const handleDismissKeyboard = () => {
    console.log("keyboard is dismissing");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        value={text}
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => {
          handleSubmit(text), setText("");
        }}
        title="Add todo"
        color="coral"
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
