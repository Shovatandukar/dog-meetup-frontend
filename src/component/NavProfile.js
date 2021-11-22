import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState } from "react";
import {
  Link,
} from "react-router-dom";
import './NavProfile.css';



export default function NavProfile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <ButtonGroup variant="text" aria-label="text button group">
            <Button href="/dog">My Dogs</Button>
             <Button href="/Event">My Events</Button>
             <Button href="/PublicEvents">All Events</Button>
            <Button href="/SearchBar">Search Events</Button>
             <Button href="/LogOut">Log Out</Button>
      </ButtonGroup>
    </Box>
  );
}