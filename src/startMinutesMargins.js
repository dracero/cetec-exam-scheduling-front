import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as startMinutesMarginActions from "./app/actions/StartMinutesMarginActions";

const startMinutesMargins = [
  5,
  10,
  15
]

const StartMinutesMargins = () => {

  const dispatch = useDispatch();
  const startMinutesMargin = useSelector((store) => store.startMinutesMargin.startMinutesMargin);

  const handleChange = (event) => {
    dispatch(startMinutesMarginActions.startMinutesMargin(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
      <InputLabel id="demo-select-medium">Margen de inicio</InputLabel>
      <Select
        labelId="demo-select-medium"
        id="demo-select-medium"
        value={startMinutesMargin}
        label="StartMinutesMargin"
        onChange={handleChange}
      >
        {startMinutesMargins.map((minutes) => (
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

export default StartMinutesMargins;
