import * as FileSystem from "expo-file-system";
import { inserPlace, fetchPlaces } from "../../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};

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
