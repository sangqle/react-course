import { createStore, combineReducers } from "redux";
import timeReducer from "../reducers/timeReducer";
import optionTimeReducer from "../reducers/optionTimeReducer";

export default () => {
  const store = createStore(
    combineReducers({
      time: timeReducer,
      options: optionTimeReducer
    })
  );
  return store;
};
