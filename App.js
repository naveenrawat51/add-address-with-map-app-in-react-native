import React from "react";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import PlacesNavigator from "./navigation/PlacesNavigator";
import PlacesReducer from "./store/reducers/places.reducer";

const rootReducer = combineReducers({
  places: PlacesReducer,
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
