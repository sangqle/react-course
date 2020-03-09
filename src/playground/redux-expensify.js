import { createStore, combineReducers } from "redux";
import uuid from "uuid";
// exprense reducer
// Add expense
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
});

const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
});

const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return [...state.filter(({ id }) => id !== action.id)];
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
        return expense;
      });
    default:
      return state;
  }
};

// filter reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createAt < b.createAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);
});

store.dispatch(
  addExpense({ description: "rent", amount: 100, createAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Coffe", amount: 233, createAt: -100 })
);

store.dispatch(setTextFilter("e"));
// store.dispatch(
//   editExpense(expenseOne.expense.id, {
//     amount: 34234,
//     description: "hello world",
//     age: 33
//   })
// );

// Sort filters
store.dispatch(sortByAmount());
// store.dispatch(sortByDate(100));

// store.dispatch(setStartDate()); // undefined
store.dispatch(setStartDate(-100));
store.dispatch(setEndDate(1000));
const demoState = {
  expenses: [
    {
      id: "dsfasdfsd",
      description: "january rent",
      note: "This is final",
      amount: 342342,
      createAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
