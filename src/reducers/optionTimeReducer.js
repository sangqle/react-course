let optionTimeReducerDefaultState = [];

try {
  const json = localStorage.getItem("options");
  const options = JSON.parse(json);
  optionTimeReducerDefaultState = [...options];
} catch (error) {}

export default (state = optionTimeReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_OPTION":
      return [
        ...state,
        { text: action.text, createdAt: action.createdAt, id: action.id }
      ];
    case "DELETE_OPTION":
      return [...state.filter(e => e.id !== action.id)];
    case "DELETE_OPTIONS":
      return [];
    default:
      return state;
  }
};
