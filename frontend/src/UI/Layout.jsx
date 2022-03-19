import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <Box>
        <AppBar
          position="sticky"
          className="animate__animated animate__fadeInDown"
          style={{backgroundColor: 'rgba(2,2,2,0.4)'}}
        >
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1}}
            >
              <Link to="/" style={{color: 'inherit'}}><EventNoteTwoToneIcon /></Link>
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Notes App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  );
};

export default Layout;
