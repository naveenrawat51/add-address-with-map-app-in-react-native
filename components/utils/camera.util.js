import * as Permissions from "expo-permissions";

export const verifyPermissions = async (permissionsType) => {
  const allPermissionsType = permissionsType.map((type) => {
    switch (type) {
      case "CAMERA":
        return Permissions.CAMERA;
      case "CAMERA_ROLL":
        return Permissions.CAMERA_ROLL;
      case "LOCATION":
        return Permissions.LOCATION;
    }
  });

  const result = await Permissions.askAsync(...allPermissionsType);
  if (result.status !== "granted") {
    Alert.alert(
      "Insufficient permissions",
      "You need to grant camera permission to use this app",
      [{ text: "Okay" }]
    );
    return false;
  }
  return true;
};
