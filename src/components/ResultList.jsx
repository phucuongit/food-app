import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";

const ResultList = ({ title }) => {
  return (
    <View>
      <Text className={styles.title}>{title}</Text>
      <FlatList
        horizontal
        renderItem={() => {
          return <Text>Cuong</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ResultList;
