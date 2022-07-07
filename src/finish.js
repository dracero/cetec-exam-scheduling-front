import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import * as finishActions from "./app/actions/FinishActions";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Finish = () => {

  const dispatch = useDispatch();
  const finish = useSelector((store) => store.finish.finish);

  const handleChange = (event) => {
    dispatch(finishActions.finish(event));
  };

  return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <DateTimePicker
            label="Hora de finalización"
            value={finish}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
  );
}

export default Finish;
