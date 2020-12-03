import React from "react";
import { StyleSheet, Platform, View, Text } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/UI/CustomHeaderButton";

export default function PlacesList({ navigation }) {
  return (
    <View>
      <Text>PlacesList</Text>
    </View>
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
