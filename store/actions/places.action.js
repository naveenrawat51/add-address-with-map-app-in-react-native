import * as FileSystem from "expo-file-system";
import { inserPlace } from "../../helpers/db";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await inserPlace(
        title,
        newPath,
        "dummy address",
        15.6,
        13.7
      );
      dispatch({ type: ADD_PLACE, id: dbResult.insertId, title, newPath });
    } catch (err) {
      throw err;
    }
  };
};
