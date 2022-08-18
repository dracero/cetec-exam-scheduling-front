import './App.css';

import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import Courses from './courses';
import Start from './start';
import Finish from './finish';
import StartMinutesMargins from './startMinutesMargins';
import FinishMinutesMargins from './finishMinutesMargins';
import SearchButton from './searchButton';
import State from './State';
import * as examActions from "./app/actions/ExamActions";
import * as stateActions from "./app/actions/StateActions";

import Button from "@mui/material/Button";

function ExamFrom({title, searchButton, sendName, send, successVerb}) {
  const course = useSelector((store) => store.exam.course);
  const start = useSelector((store) => store.exam.start);
  const finish = useSelector((store) => store.exam.finish);
  const startMinutesMargin = useSelector((store) => store.exam.startMinutesMargin);
  const finishMinutesMargin = useSelector((store) => store.exam.finishMinutesMargin);
  const id = useSelector((store) => store.exam.id);

  const dispatch = useDispatch();

  const noNull = () => {
    const data = {
      course: course,
      start: new Date(start),
      finish: new Date(finish),
      startMinutesMargin: startMinutesMargin,
      finishMinutesMargin: finishMinutesMargin,
    }

    if (
      data.course === "" ||
      data.start === "" ||
      data.finish === "" ||
      data.startMinutesMargin === "" ||
      data.finishMinutesMargin === ""
    ) {
      dispatch(stateActions.state("Error"));
      return null;
    }

    return data;
  };

  const sendHandler = async () => {
    let data = noNull();
    if (!data){ return }
    if(await send(data)) {
      dispatch(stateActions.state("Success"));
      dispatch(examActions.reset());
    } else {
      dispatch(stateActions.state("Error"));
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">{title}</div>
        <State successVerb={successVerb} />
        <Courses />
        <Start />
        <Finish disabled={(searchButton && id === '')}/>
        <StartMinutesMargins disabled={(searchButton && id === '')}/>
        <FinishMinutesMargins disabled={(searchButton && id === '')}/>
        { searchButton &&
          <SearchButton />
        }
        <Button variant="contained" onClick={sendHandler} id="exam-btn" disabled={(searchButton && id === '')}>
          {sendName}
        </Button>
      </header>
    </div>
  );
}

export default ExamFrom;
