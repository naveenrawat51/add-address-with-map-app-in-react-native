import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import Colors from "../constants/Colors";

export default function MapScreen({ navigation }) {
  const initialLocation = navigation.getParam("initialLocation");
  const readonly = navigation.getParam("readonly");

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const mapRegion = {
    latitude: initialLocation ? initialLocation.latitude : 37.78,
    longitude: initialLocation ? initialLocation.longitude : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    if (readonly) {
      return;
    }
    setSelectedLocation(event.nativeEvent.coordinate);
  };

  let markerCoordinates;
  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
    };
  }

  const savePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("Choose location", "Please select location", [
        { text: "Okay" },
      ]);
      return;
    }
    navigation.navigate("NewPlace", { selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    navigation.setParams({ saveLocation: savePickedLocation });
  }, [savePickedLocation]);

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates}></Marker>
      )}
    </MapView>
  );
}

MapScreen.navigationOptions = ({ navigation }) => {
  const saveFn = navigation.getParam("saveLocation");
  const readonly = navigation.getParam("readonly");
  if (readonly) {
    return {};
  }
  return {
    headerRight: () => (
      <TouchableOpacity style={styles.headerButton} onPress={saveFn}>
        <Text style={styles.headerButtonText}>Save</Text>
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : Colors.primary,
  },
});
