import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.text}>{item.text}</Text>
        <MaterialIcons
          onPress={() => pressHandler(item.id)}
          style={styles.materialIcon}
          name="delete"
        />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    fontSize: 20,
  },
  materialIcon: {
    fontSize: 30,
    flex: 0.1,
  },
});
