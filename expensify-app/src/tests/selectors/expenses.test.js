import selectExpenses from "../../selectors/expenses";
import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "Rent",
    note: "",
    amount: 234,
    createdAt: 0
  },
  {
    id: "2",
    description: "Create card",
    note: "",
    amount: 100,
    createdAt: moment(0)
      .subtract(4, "day")
      .valueOf()
  },
  {
    id: "3",
    description: "Gum",
    note: "",
    amount: 4000,
    createdAt: moment(0)
      .subtract(4, "day")
      .valueOf()
  }
];
test("should filtes by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, { ...filters });
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const results = selectExpenses(expenses, { ...filters });
  expect(results).toEqual([expenses[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: moment(0)
  };
  const results = selectExpenses(expenses, { ...filters });
  expect(results).toEqual([expenses[2], expenses[0], expenses[1]]);
});
