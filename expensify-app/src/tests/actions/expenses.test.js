import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
test("should set up remove expense object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should set up edit expense object", () => {
  const action = editExpense("123abc", { note: "some note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "some note"
    }
  });
});

test("should set up add expense object", () => {
  const expenseData = {
    description: "Rent",
    note: "some note",
    amount: 200,
    createdAt: 100
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should set update add expense object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
