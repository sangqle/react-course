import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should generate add expenses", () => {
  const action = {
    expense: {
      description: "gas",
      note: "",
      amount: 0,
      createdAt: 0
    },
    type: "ADD_EXPENSE"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should edit expenses", () => {
  const updates = {
    amount: 230
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(updates.amount);
});

test("should edit expenses with id not found", () => {
  const updates = {
    amount: 230
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: -3,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
