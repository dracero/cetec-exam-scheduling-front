import './App.css';

import { React,  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Courses from './courses';
import Start from './start';
import Finish from './finish';
import StartMinutesMargins from './startMinutesMargins';
import FinishMinutesMargins from './finishMinutesMargins';
import SearchButton from './searchButton';
import * as examActions from "./app/actions/ExamActions";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

function ExamFrom({title, searchButton, sendName, send, successVerb}) {
  const [state, setState] = useState('');

  const course = useSelector((store) => store.course);
  const start = useSelector((store) => store.start);
  const finish = useSelector((store) => store.finish);
  const startMinutesMargin = useSelector((store) => store.startMinutesMargin);
  const finishMinutesMargin = useSelector((store) => store.finishMinutesMargin);
  const id = useSelector((store) => store.id);

  const dispatch = useDispatch();

  const clearInputs = () => {
    dispatch(examActions.course(""));
    dispatch(examActions.start(""));
    dispatch(examActions.finish(""));
    dispatch(examActions.startMinutesMargin(""));
    dispatch(examActions.finishMinutesMargin(""));
  };

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
      setState('Error');
      return null;
    }

    return data;
  };

  const sendHandler = () => {
    let data = noNull();
    if (!data){ return }
    if(send(data)) {
      setState('Success');
      clearInputs();
    } else {
      setState('Error');
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">{title}</div>
        {(state === 'Success') &&
          <div>
            <Alert variant="outlined" severity="success">
              Examen {successVerb} exitosamente.
            </Alert>
          </div>
        }
        {(state === 'Error') &&
          <div>
            <Alert variant="outlined" severity="error">
              Error
            </Alert>
          </div>
        }
        <Courses />
        <Start />
        <Finish disabled={(searchButton && id === '')}/>
        <StartMinutesMargins disabled={(searchButton && id === '')}/>
        <FinishMinutesMargins disabled={(searchButton && id === '')}/>
        { searchButton &&
          <SearchButton disabled={(id !== '')}/>
        }
        <Button variant="contained" onClick={sendHandler} id="exam-btn" disabled={(searchButton && id === '')}>
          {sendName}
        </Button>
      </header>
    </div>
  );
}

export default ExamFrom;
