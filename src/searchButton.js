import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as examActions from "./app/actions/ExamActions";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const SearchButton = () => {
  const id = useSelector((store) => store.id);
  const start = useSelector((store) => store.start);
  const course = useSelector((store) => store.course);
  const dispatch = useDispatch();

  const search = (event) => {
    event.preventDefault();

    axios
      .get(process.env.REACT_APP_URL + "/exam/?start=" + start + "&course=" + course, { withCredentials: true })
      .then(response => {
        if(!response.data) {
          dispatch(examActions.reset());
          console.log('Error: no existe un examen del curso ' + course + ' con la fecha de inicio ' + start);
        
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
        }
      })
      .catch(error => {
        let errorMessage = error
        dispatch(examActions.reset());
        console.log(errorMessage);
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
