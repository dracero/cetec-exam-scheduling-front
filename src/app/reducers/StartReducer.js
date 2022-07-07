const initialState = { start: '' };

export function startReducer(state = initialState, action) {
  switch (action.type) {
    case "START":
      return {
        start: action.newStart,
      };

    default:
      return state;
  }
}
