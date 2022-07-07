
import { createStore, combineReducers } from "redux";
import { courseReducer } from "./reducers/CourseReducer";
import { startReducer } from "./reducers/StartReducer";
import { finishReducer } from "./reducers/FinishReducer";
import { startMinutesMarginReducer } from "./reducers/StartMinutesMarginReducer";
import { finishMinutesMarginReducer } from "./reducers/FinishMinutesMarginReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    course: courseReducer,
    start: startReducer,
    finish: finishReducer,
    startMinutesMargin: startMinutesMarginReducer,
    finishMinutesMargin: finishMinutesMarginReducer
  })

export default createStore(reducer, composeWithDevTools());
