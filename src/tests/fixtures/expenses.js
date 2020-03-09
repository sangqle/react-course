import moment from "moment";
export default [
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
