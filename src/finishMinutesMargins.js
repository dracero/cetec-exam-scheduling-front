import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as examActions from "./app/actions/ExamActions";

const finishMinutesMargins = [
  5,
  10,
  15
]

const FinishMinutesMargins = () => {

  const dispatch = useDispatch();
  const finishMinutesMargin = useSelector((store) => store.finishMinutesMargin);

  const handleChange = (event) => {
    dispatch(examActions.finishMinutesMargin(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
      <InputLabel id="demo-select-medium">Margen de finalización</InputLabel>
      <Select
        labelId="demo-select-medium"
        id="demo-select-medium"
        value={finishMinutesMargin}
        label="FinishMinutesMargin"
        onChange={handleChange}
      >
        {finishMinutesMargins.map((minutes) => (
          <MenuItem
            key={minutes}
            value={minutes}
          >
            {minutes}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FinishMinutesMargins;
