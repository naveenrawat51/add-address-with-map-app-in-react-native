import React from "react";
import { StyleSheet, Platform, View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/UI/CustomHeaderButton";
import PlaceItem from "../components/PlaceItem";

export default function PlacesList({ navigation }) {
  const AllPlaces = useSelector((state) => state.places.places);

  const displayPlaces = (itemData) => {
    return (
      <PlaceItem
        {...itemData.item}
        address={null}
        onSelect={() => {
          navigation.navigate("PlaceDetail", { ...itemData.item });
        }}
        navigation={navigation}
      />
    );
  };
  return (
    <FlatList
      data={AllPlaces}
      keyExtractor={(item) => item.id}
      renderItem={displayPlaces}
    />
  );
}

PlacesList.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "All Places",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add Place"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => navigation.navigate("NewPlace")}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({});
