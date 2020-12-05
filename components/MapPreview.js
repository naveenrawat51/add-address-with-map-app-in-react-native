import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";

import ENV from "../env";
import Colors from "../constants/Colors";

export default function MapPreview({ lat, lng, children, onPressHandler }) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${ENV.googleApiKey}`;
  return (
    <TouchableOpacity onPress={onPressHandler}>
      {lat && lng ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mapImage: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
