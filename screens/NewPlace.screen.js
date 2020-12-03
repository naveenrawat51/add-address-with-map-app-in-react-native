import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";

import * as PlacesActions from "../store/actions/places.action";

export default function NewPlace({ navigation }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const savePlaceHandler = () => {
    dispatch(PlacesActions.addPlace(title));
    navigation.goBack();
  };

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
