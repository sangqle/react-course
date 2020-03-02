import uuid from "uuid";
export const addOption = (text = "") => {
  return {
    type: "ADD_OPTION",
    text,
    id: uuid(),
    createdAt: Date.now()
  };
};
