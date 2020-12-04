import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../constants/Colors";

export default function PlaceItem({ onSelect, imageUri, title, address }) {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <TouchableComponent onPress={onSelect}>
      <View style={styles.placeItem}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </TouchableComponent>
  );
}

const styles = StyleSheet.create({
  placeItem: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ccc",
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: "#666",
    fontSize: 16,
  },
});
