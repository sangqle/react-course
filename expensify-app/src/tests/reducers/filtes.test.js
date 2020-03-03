import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should setup sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should setup sortBy to Date", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should setup text filter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "rent"
  });
  expect(state.text).toBe("rent");
});

test("should setup start date", () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate
  });
  expect(state.startDate).toBe(startDate);
});

test("should setup end date", () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate
  });
  expect(state.endDate).toBe(endDate);
});
