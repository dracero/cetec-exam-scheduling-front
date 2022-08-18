import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as examActions from "./app/actions/ExamActions";
import * as stateActions from "./app/actions/StateActions";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const SearchButton = () => {
  const id = useSelector((store) => store.exam.id);
  const start = useSelector((store) => store.exam.start);
  const course = useSelector((store) => store.exam.course);
  const dispatch = useDispatch();

  const search = (event) => {
    event.preventDefault();

    axios
      .get(process.env.REACT_APP_URL + "/exam/?start=" + start + "&course=" + course, { withCredentials: true })
      .then(response => {
        if(!response.data) {
          dispatch(stateActions.state("Error"));
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
          dispatch(stateActions.state("Neutral"));
        }
      })
      .catch(_error => {
        dispatch(examActions.reset());
        dispatch(stateActions.state("Error"));
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
