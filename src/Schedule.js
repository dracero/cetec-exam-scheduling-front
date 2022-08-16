// import logo from './logo.svg';
import './App.css';

import { React, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Courses from './courses';
import Start from './start';
import Finish from './finish';
import StartMinutesMargins from './startMinutesMargins';
import FinishMinutesMargins from './finishMinutesMargins';
import * as examActions from "./app/actions/ExamActions";

import axios from "axios";

import logo from './logo.svg';

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

function Schedule() {

  const [state, setState] = useState('');

  const course = useSelector((store) => store.course);
  const start = useSelector((store) => store.start);
  const finish = useSelector((store) => store.finish);
  const startMinutesMargin = useSelector((store) => store.startMinutesMargin);
  const finishMinutesMargin = useSelector((store) => store.finishMinutesMargin);

  const dispatch = useDispatch();

  const clearInputs = () => {
    dispatch(examActions.course(""));
    dispatch(examActions.start(""));
    dispatch(examActions.finish(""));
    dispatch(examActions.startMinutesMargin(""));
    dispatch(examActions.finishMinutesMargin(""));
  };

  const upload = useCallback(() => {

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
      console.log("ERROR");
      setState('Error');
      return;
    }

    axios
      .post("http://localhost:8080/exam/", null, { params: data , withCredentials: true })
      .then(function (response) {
        //handle success
        console.log("EXITO");
        setState('Success');
        clearInputs();
      })
      .catch(function (response) {
        //handle error
        
        console.log("ERROR");
        setState('Error');
      });

  }, [course, start, finish, startMinutesMargin, finishMinutesMargin]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo FIUBA" className="logo-img" />
        <div className="Title">EXAM SCHEDULING</div>
        <Courses />
        <Start />
        <Finish />
        <StartMinutesMargins />
        <FinishMinutesMargins />
        <Button variant="contained" onClick={upload} >
          Agregar nuevo examen
        </Button>
        {(state === 'Success') &&
          <div>
            <Alert variant="outlined" severity="success">
              Examen agregado exitosamente.
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
      </header>
    </div>
  );
}

export default Schedule;
