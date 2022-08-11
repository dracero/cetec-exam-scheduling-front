
import { createStore } from "redux";
import { examReducer } from "./reducers/ExamReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(examReducer, composeWithDevTools());
