import './App.css';

import { React } from "react";
import ExamForm from './ExamForm';
import axios from "axios";

function Schedule() {

  const upload = async (data) => {
    return axios
      .post(process.env.REACT_APP_URL + "/exam/", null, { params: data , withCredentials: true })
      .then(function (response) {
        //handle success
        return true
      })
      .catch(function (response) {
        //handle error
        return false
      });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <ExamForm title="AGENDADOR" 
                  searchButton={false} 
                  sendName="Agregar nuevo examen" 
                  send={upload} 
                  successVerb="agregado" />
      </header>
    </div>
  );
}

export default Schedule;
