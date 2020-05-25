import React, { useReducer, useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultList from "../components/ResultList";
import useRestaurant from "../hooks/useRestaurant";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useRestaurant();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      {errorMessage ? (
        <Text style={{ color: "red" }}>{errorMessage}</Text>
      ) : null}

      <Text>We have found {results.length}</Text>
      <ResultList title="Món mặn" />
      <ResultList title="Món ngọt" />
      <ResultList title="Món nhẹ" />
    </View>
  );
};
export default SearchScreen;
