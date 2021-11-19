import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
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
            <Button color="inherit"><Link to="/login">Login</Link></Button>
            <Button color="inherit"><Link to="/contact">Contact</Link></Button>
            <Button color="inherit"><Link to="/register">Register</Link></Button>
            <Button color="inherit"><Link to="/dog">My Dogs</Link></Button>
            <Button color="inherit"><Link to="/Event">My Events</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}