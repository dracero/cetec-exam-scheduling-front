import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import * as examActions from "./app/actions/ExamActions";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Start = () => {

  const dispatch = useDispatch();
  const start = useSelector((store) => store.exam.start);

  const handleChange = (event) => {
    dispatch(examActions.start(event));
  };

  return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <DateTimePicker
            label="Hora de inicio"
            value={start || null}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} sx={{ m: 1 }} />}
          />
        </Stack>
      </LocalizationProvider>
  );
}

export default Start;
