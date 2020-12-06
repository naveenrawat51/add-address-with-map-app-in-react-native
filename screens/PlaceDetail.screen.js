import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import MapPreview from "../components/MapPreview";
import Colors from "../constants/Colors";

export default function PlaceDetail({ navigation }) {
  const placeId = navigation.getParam("id");
  const selectedPlace = useSelector((state) =>
    state.places.places.find((item) => item.id === placeId)
  );

  const showMapHandler = () => {
    navigation.navigate("Map", {
      readonly: true,
      initialLocation: {
        latitude: selectedPlace.lat,
        longitude: selectedPlace.lng,
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image style={styles.image} source={{ uri: selectedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{selectedPlace.address}</Text>
        </View>
        <View style={styles.mapPreview}>
          <MapPreview
            lat={selectedPlace.lat}
            lng={selectedPlace.lng}
            onPressHandler={showMapHandler}
          />
        </View>
      </View>
    </ScrollView>
  );
}

PlaceDetail.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam("title"),
  };
};

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
  },
  locationContainer: {
    marginVertical: 10,
    width: "90%",
    maxWidth: 350,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary,
    textAlign: "center",
  },
  mapPreview: {
    marginBottom: 20,
  },
});
