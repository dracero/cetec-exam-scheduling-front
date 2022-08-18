
import { createStore, combineReducers } from "redux";
import { examReducer } from "./reducers/ExamReducer";
import { stateReducer } from "./reducers/StateReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  exam: examReducer,
  state: stateReducer
})

export default createStore(reducer, composeWithDevTools());
