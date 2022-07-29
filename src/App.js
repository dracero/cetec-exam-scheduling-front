// import logo from './logo.svg';
import './App.css';

import { React, useCallback } from "react";
import { useSelector } from "react-redux";
import Courses from './courses';
import Start from './start';
import Finish from './finish';
import StartMinutesMargins from './startMinutesMargins';
import FinishMinutesMargins from './finishMinutesMargins';

import axios from "axios";

import logo from './logo.svg';

function App() {

  const course = useSelector((store) => store.course.course);
  const start = useSelector((store) => store.start.start);
  const finish = useSelector((store) => store.finish.finish);
  const startMinutesMargin = useSelector((store) => store.startMinutesMargin.startMinutesMargin);
  const finishMinutesMargin = useSelector((store) => store.finishMinutesMargin.finishMinutesMargin);

  const upload = useCallback(() => {

    const data = {
      email:"mail88@test.com",
      course: course,
      start: start,
      finish: finish,
      startMinutesMargin: startMinutesMargin,
      finishMinutesMargin: finishMinutesMargin
    }

    var bodyFormData = new FormData();
    bodyFormData.append('email', data.email);
    bodyFormData.append('course', data.course);
    bodyFormData.append('start', data.start);
    bodyFormData.append('finish', data.finish);
    bodyFormData.append('startMinutesMargin', data.startMinutesMargin);
    bodyFormData.append('finishMinutesMargin', data.finishMinutesMargin);

    axios({
      method: "post",
      url: "http://localhost:8080/exam",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true
    })
      .then(function (response) {
        //handle success
        console.log("EXITO");
      })
      .catch(function (response) {
        //handle error
        console.log("ERROR");
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
        <button onClick={upload}> Agregar nuevo examen </button>
      </header>
    </div>
  );
}

export default App;
