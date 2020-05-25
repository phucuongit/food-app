import React, { useReducer, useState } from "react";
import { View, Text } from "react-native";

export default () => {
  
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

  return [];
};
