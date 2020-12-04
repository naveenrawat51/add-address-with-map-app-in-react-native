import { ADD_PLACE } from "../actions/places.action";
import Place from "../../models/Place";

const initialState = {
  places: [],
};

export default function PlacesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLACE:
      const newplace = new Place(
        action.id.toString(),
        action.title,
        action.newPath
      );
      return {
        places: state.places.concat(newplace),
      };
  }
  return state;
}
