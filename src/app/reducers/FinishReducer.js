const initialState = { finish: '' };

export function finishReducer(state = initialState, action) {
  switch (action.type) {
    case "FINISH":
      return {
        finish: action.newFinish,
      };

    default:
      return state;
  }
}
