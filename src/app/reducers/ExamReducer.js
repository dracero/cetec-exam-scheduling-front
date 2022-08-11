const initialState = { id:'', course: '', start: '', finish: '', startMinutesMargin: '', finishMinutesMargin: '' };

export function examReducer(state = initialState, action) {
  switch (action.type) {
    case "ID":
      return {
        ...state,
        id: action.newid,
      };
      
    case "COURSE":
      return {
        ...state,
        course: action.newCourse,
      };
      
    case "START":
      return {
        ...state,
        start: action.newStart,
      };

    case "FINISH":
      return {
        ...state,
        finish: action.newFinish,
      };

    case "START MINUTES MARGIN":
      return {
        ...state,
        startMinutesMargin: action.newStartMinutesMargin,
      };

    case "FINISH MINUTES MARGIN":
      return {
        ...state,
        finishMinutesMargin: action.newFinishMinutesMargin,
      };

    case "EXAM":
      return action.newExam;

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
