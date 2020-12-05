import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { verifyPermissions } from "./utils/camera.util";

import Colors from "../constants/Colors";

export default function ImgPicker({ onImageTaken }) {
  const [pickedImage, setPiackedImage] = useState();
  const [loadingImage, setLoadingImage] = useState();

  const takeImageHandler = async () => {
    setLoadingImage(true);
    const hasPermission = await verifyPermissions(["CAMERA", "CAMERA_ROLL"]);
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      aspect: [16, 9],
      quality: 0.5,
    });

    setPiackedImage(image.uri);
    setLoadingImage(false);
    onImageTaken(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {loadingImage ? (
          <ActivityIndicator color={Colors.primary} size="large" />
        ) : !pickedImage ? (
          <Text>No image picked yet</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <View style={styles.getImage}>
        <Button
          title="Take Image"
          color={Colors.primary}
          onPress={takeImageHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  getImage: {
    marginTop: 10,
    width: "100%",
  },
});
