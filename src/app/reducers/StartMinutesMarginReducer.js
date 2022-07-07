const initialState = { startMinutesMargin: '' };

export function startMinutesMarginReducer(state = initialState, action) {
  switch (action.type) {
    case "START MINUTES MARGIN":
      return {
        startMinutesMargin: action.newStartMinutesMargin,
      };

    default:
      return state;
  }
}
