import {React, useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import Login from "./Login";
import Logout from "./Logout";
import Schedule from "./Schedule";
import Reschedule from "./Reschedule";
import * as stateActions from "./app/actions/StateActions";

import logo from './logo.svg';

import Cookies from 'js-cookie';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import './App.css'

const NavbarList = () => {
  const location = useLocation().pathname

  const list = () => {
    return(
      <div>
        <Box m={0} pt={0}>
          <Button component={Link} to="/agendar" variant="contained">Agendar examen</Button>
        </Box>
        <br/>
        <Box m={0} pt={0}>
          <Button component={Link} to="/reagendar" variant="contained">Reagendar examen</Button>
        </Box>
      </div>
    )
  }

  return(
    location === "/" ? list() : null
  )
};

const NavbarButton = () => {
  const location = useLocation().pathname
  const dispatch = useDispatch();
  const resetState = () => {
    dispatch(stateActions.state('Neutral'));
  }

  return(
    location === "/" ? null : <Button component={Link} onClick={resetState} to="/" variant="text">Volver</Button>
  )
};

const Home = () => {
  const [token, setToken] = useState('')
  useEffect(() => {
    
    if (Cookies.get('token')){
      setToken(Cookies.get('token'))
    }

  }, []);

  return(
    <>
      {token ? 
        <>
          <br/>
          <Logout/>
          <img src={logo} alt="Logo FIUBA" className="logo-img" />
          <NavbarList />
        </>
        :
        <>
          <br/>
          <img src={logo} alt="Logo FIUBA" className="logo-img" />
          <div className="Title center">AGENDADOR</div>
          <Login />
        </>
      }
      <br/>
    </>
  )
};

const Navbar = () => {
  return (
    <Router>
      <div className="center">
        <Home />

        <Routes>
          <Route path="/agendar"  element={<Schedule/>}></Route>
          <Route path="/reagendar"  element={<Reschedule/>}></Route>
          <Route path="/" element={null}></Route>
        </Routes>

        <NavbarButton />
      </div>
    </Router>
  );
}

export default Navbar;
