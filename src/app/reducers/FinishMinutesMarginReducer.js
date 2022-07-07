const initialState = { finishMinutesMargin: '' };

export function finishMinutesMarginReducer(state = initialState, action) {
  switch (action.type) {
    case "FINISH MINUTES MARGIN":
      return {
        finishMinutesMargin: action.newFinishMinutesMargin,
      };

    default:
      return state;
  }
}
