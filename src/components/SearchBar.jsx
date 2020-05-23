import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <EvilIcons name="search" style={styles.iconStyle} color="black" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#ccc",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
export default SearchBar;
