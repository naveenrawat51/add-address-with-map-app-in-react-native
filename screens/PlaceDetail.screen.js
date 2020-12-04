import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PlaceDetail({ navigation }) {
  return (
    <View>
      <Text>PlaceDetail</Text>
    </View>
  );
}

PlaceDetail.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam("title"),
  };
};

const styles = StyleSheet.create({});
