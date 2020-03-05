import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndicisionApp";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
const store = configureStore();

setInterval(() => {
  store.dispatch({ type: "GET_CURR_TIME" });
}, 1000);
const jsx = (
  <Provider store={store}>
    <IndecisionApp />
  </Provider>
);
const unsbucribe = store.subscribe(() => {
  const json = JSON.stringify(store.getState().options);
  localStorage.setItem("options", json);
});

ReactDOM.render(jsx, document.getElementById("app"));
