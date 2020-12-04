import React from "react";
import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PlaceListScreen from "../screens/PlacesList.screen";
import PlaceDetailScreen from "../screens/PlaceDetail.screen";
import NewPlaceScreen from "../screens/NewPlace.screen";
import MapScreen from "../screens/Map.screen";

import Colors from "../constants/Colors";

const PlacesNavigator = createStackNavigator(
  {
    Places: PlaceListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(PlacesNavigator);
