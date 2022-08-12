import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as examActions from "./app/actions/ExamActions";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const SearchButton = () => {
  const id = useSelector((store) => store.id);
  const start = useSelector((store) => store.start);
  const dispatch = useDispatch();

  const search = (event) => {
    event.preventDefault();

    axios
      .get("http://localhost:8080/exam/?start="+ start, { withCredentials: true })
      .then(response => {
        if(!response.data) {
          dispatch(examActions.reset());
          console.log('Error: no existe una estructura con el comienzo ' + start + '');
        
        } else {
          const newExam = {
            id: response.data._id,
            course: response.data.course.charAt(0).toUpperCase() + response.data.course.slice(1),
            start: response.data.start,
            finish: response.data.finish,
            startMinutesMargin: response.data.startMinutesMargin,
            finishMinutesMargin: response.data.finishMinutesMargin,
          }
          dispatch(examActions.exam(newExam));
          //document.getElementById("outlined-basic-text").value = response.data.text;
        }
      })
      .catch(error => {
        let errorMessage = error
        dispatch(examActions.reset());
        console.log(errorMessage);
        //document.getElementById("outlined-basic-name").value = '';
      });
  }

  return(
    <Box m={1} pt={2}>
        <Button variant="contained" onClick={search} type="submit" disabled={(id !== '')} >
          Buscar
        </Button>
    </Box>
  );
}

export default SearchButton;
