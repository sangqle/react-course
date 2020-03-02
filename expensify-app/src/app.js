import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouters from "./routers/AppRouters";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByDate, sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "water bill", amount: 200 }));
store.dispatch(addExpense({ description: "Electronic bill", amount: 100 }));

store.dispatch(
  addExpense({ description: "Gas bill", note: "time up", amount: 500 })
);

store.dispatch(sortByAmount());
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouters />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
