import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";

import * as Location from "expo-location";
import { verifyPermissions } from "./utils/camera.util";

import MapPreview from "./MapPreview";

export default function LocationPicker() {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState({});

  const getLocationHandler = async () => {
    const hasPermissions = await verifyPermissions(["LOCATION"]);
    if (!hasPermissions) {
      return;
    }

    try {
      setIsFetching(true);
      const locationData = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      const lat = locationData.coords.latitude;
      const lng = locationData.coords.longitude;
      setPickedLocation({
        lat,
        lng,
      });
    } catch (err) {
      console.log(err);
      Alert.alert(
        `couldn't fetch location`,
        "Please try again or pick a location on the map",
        [{ text: "Okay" }]
      );
    }

    setIsFetching(false);
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview lat={pickedLocation.lat} lng={pickedLocation.lng}>
        <View style={styles.mapPreview}>
          {isFetching ? (
            <ActivityIndicator size="large" color={Colors.primary} />
          ) : (
            <Text>No location chosen yet!</Text>
          )}
        </View>
      </MapPreview>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Get User Location"
          color={Colors.primary}
          onPress={getLocationHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
