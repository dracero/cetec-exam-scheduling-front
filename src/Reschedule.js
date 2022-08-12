// import logo from './logo.svg';
import './App.css';

import { React, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Courses from './courses';
import Start from './start';
import Finish from './finish';
import StartMinutesMargins from './startMinutesMargins';
import FinishMinutesMargins from './finishMinutesMargins';
import SearchButton from './searchButton';
import * as examActions from "./app/actions/ExamActions";

import axios from "axios";

import logo from './logo.svg';

import Alert from "@mui/material/Alert";

function Reschedule() {

  const [state, setState] = useState('');
  let valor = document.cookie.split("token=");
  const cookie = useState(valor[1]);

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

  const update = useCallback(() => {

    const data = {
      course: course,
      start: start,
      finish: finish,
      startMinutesMargin: startMinutesMargin,
      finishMinutesMargin: finishMinutesMargin,
      withCredentials: true
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
      .put("http://localhost:8080/exam/" + id + "/?secret_token="+cookie[0], data)
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
        <SearchButton />
        <button onClick={update}> Actualizar examen </button>
        {(state === 'Success') &&
          <div>
            <Alert variant="outlined" severity="success">
              Examen actualizado exitosamente.
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

export default Reschedule;
