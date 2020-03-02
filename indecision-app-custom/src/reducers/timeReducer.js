const timeDefaultState = {
  currentTime: Date.now()
};
export default (state = timeDefaultState, action) => {
  switch (action.type) {
    case "GET_CURR_TIME":
      return {
        ...state,
        currentTime: Date.now()
      };
    default:
      return state;
  }
};
