import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MapView from "react-native-maps";

export default function Map({ navigation }) {
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return <MapView style={styles.map} region={mapRegion} />;
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
