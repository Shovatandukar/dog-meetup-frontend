import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import './Nav.css';
import {
  Link,
} from "react-router-dom";



export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit"> <Link to="/home">Home</Link></Button>
            <Button color="inherit"> <Link to="/about">About</Link></Button>
            <Button color="inherit"><Link to="/contact">Contact</Link></Button>
            <Button color="inherit"><Link to="/register">Register</Link></Button>
            <Button color="inherit"><Link to="/login">Login</Link></Button>
            <Button color="inherit"><Link to="/Profile">My Profile</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}