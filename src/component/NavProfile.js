import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import {
  Link,
} from "react-router-dom";
import './NavProfile.css';



export default function NavProfile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar call="adminMenu" position="static">
        <Toolbar>
            <Button color="inherit"><Link to="/dog">My Dogs</Link></Button>
            <Button color="inherit"><Link to="/Event">My Events</Link></Button>
            <Button color="inherit"><Link to="/PublicEvents">Join Events</Link></Button>
            <Button color="inherit"><Link to="/LogOut">Log Out</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}