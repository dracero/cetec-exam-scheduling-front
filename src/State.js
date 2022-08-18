import './App.css';

import { React } from "react";
import { useSelector } from "react-redux";

import Alert from "@mui/material/Alert";

function State({successVerb}) {
  const state = useSelector((store) => store.state.state);

  return (
    <>
      {(state === 'Success') &&
        <div>
          <Alert variant="outlined" severity="success">
            Examen {successVerb} exitosamente.
          </Alert>
        </div>
      }
      {(state === 'Error') &&
        <div>
          <Alert variant="outlined" severity="error">
            Error
          </Alert>
        </div>
      }
    </>
  );
}

export default State;
