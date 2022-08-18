import './App.css';

import { React, useState } from "react";
import { useSelector } from "react-redux";
import ExamForm from './ExamForm';
import axios from "axios";

function Reschedule() {
  let valor = document.cookie.split("token=");
  const cookie = useState(valor[1]);

  const id = useSelector((store) => store.id);

  const update = async (data) => {
    return  axios
      .put(process.env.REACT_APP_URL + "/exam/" + id + "/?secret_token="+cookie[0], data)
      .then(function (response) {
        //handle success
        return true;
      })
      .catch(function (response) {
        //handle error
        return false;
      });
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <ExamForm title="REAGENDADOR" 
                  searchButton={true} 
                  sendName="Actualizar examen" 
                  send={update} 
                  successVerb="actualizado" />
      </header>
    </div>
  );
}

export default Reschedule;
