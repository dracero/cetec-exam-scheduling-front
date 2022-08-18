import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as examActions from "./app/actions/ExamActions";

const courses = [
  "Rodriguez",
  "Perez",
  "Otro"
]

const Courses = () => {

  const dispatch = useDispatch();
  const course = useSelector((store) => store.exam.course);

  const handleChange = (event) => {
    dispatch(examActions.course(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
      <InputLabel id="demo-select-medium">Curso</InputLabel>
      <Select
        labelId="demo-select-medium"
        id="demo-select-medium"
        value={course}
        label="Course"
        onChange={handleChange}
      >
        {courses.map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Courses;
