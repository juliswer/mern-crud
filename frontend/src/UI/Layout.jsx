import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import GitHubIcon from "@mui/icons-material/GitHub";
import AddLinkIcon from '@mui/icons-material/AddLink';

const Layout = ({ children }) => {

  const navigate = useNavigate();

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
      <Fab
        aria-label="add"
        size="small"
        className="animate__animated animate__fadeInUp"
        style={{ position: "absolute", bottom: "20px", left: "20px", paddingTop: '25px', paddingBottom: '25px', paddingRight: '13px', paddingLeft: '13px' }}
        href="https://github.com/juliswer/mern-crud"
        target="_blank"
        variant="extended"
      >
        <GitHubIcon style={{fontSize: "40px"}} />&nbsp; See Repo &nbsp;<AddLinkIcon />
      </Fab>
    </div>
  );
};

export default Layout;
