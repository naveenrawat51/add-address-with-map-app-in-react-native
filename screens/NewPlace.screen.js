import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";

import ImgPicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";

import * as PlacesActions from "../store/actions/places.action";

export default function NewPlace({ navigation }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  const savePlaceHandler = () => {
    dispatch(PlacesActions.addPlace(title, selectedImage, selectedLocation));
    navigation.goBack();
  };

  const onImageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const locationPickedHandler = useCallback((location) => {
    setSelectedLocation(location);
  }, []);

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label} value={title}>
          Title
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
        />
        <ImgPicker onImageTaken={onImageTakenHandler} />
        <LocationPicker
          navigation={navigation}
          onLocationPicked={locationPickedHandler}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
}

NewPlace.navigationOptions = {
  headerTitle: "Add Place",
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
