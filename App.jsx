import React from "react";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import { createStackNavigator } from "react-navigation-stack";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "BusinessSearch",
    },
  }
);

export default createAppContainer(navigator);
