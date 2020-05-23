import React, { useReducer, useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [errors, setErrorMessage] = useState([]);
  const searchApi = async () => {
    try {
      const response = await yelp.get("/search");
      console.log(response.data);
    } catch (err) {
      setErrorMessage("something went wrong");
    }
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      {errors ? <Text style={{ color: "red" }}>{errors}</Text> : null}

      <Text>We have found {result}</Text>
    </View>
  );
};
export default SearchScreen;
