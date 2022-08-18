import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import * as examActions from "./app/actions/ExamActions";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Finish = ({disabled}) => {

  const dispatch = useDispatch();
  const finish = useSelector((store) => store.exam.finish);

  const handleChange = (event) => {
    dispatch(examActions.finish(event));
  };

  return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <DateTimePicker
            label="Hora de finalización"
            inputFormat="DD/MM/YYYY HH:mm"
            ampm={false}
            value={finish || null}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} sx={{ m: 1 }} />}
            disabled={disabled}
          />
        </Stack>
      </LocalizationProvider>
  );
}

export default Finish;
