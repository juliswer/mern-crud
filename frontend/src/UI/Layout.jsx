import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddLinkIcon from "@mui/icons-material/AddLink";
import {useLocation} from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Layout = ({ children }) => {

  const location = useLocation()

  return (
    <div>
      <Box>
        <Stack
          direction="row"
          spacing={1}
          className="animate__animated animate__fadeInDown"
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{
              borderRadius: "40px",
              backgroundColor: "rgba(223,52,46,0.4)",
              paddingTop: "10px",
              paddingBottom: "8px",
              paddingLeft: "20px",
              paddingRight: "20px",
              marginLeft: "20px",
            }}
            sx={{ mr: 1 }}
          >
            <Link to="/" style={{ color: "inherit" }}>
              {
                location.pathname === "/" ? (
                  <EventNoteTwoToneIcon />
                ) : (
                  <HomeOutlinedIcon style={{fontSize: "25px"}} />
                )
              }
            </Link>
          </IconButton>
          <AppBar
            position="sticky"
            style={{
              borderRadius: "40px",
              backgroundColor: "rgba(223,141,46,0.4)",
              width: "90%",
            }}
          >
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit" component="div">
                Notes App
              </Typography>
            </Toolbar>
          </AppBar>
        </Stack>
      </Box>
      {children}
      <Fab
        aria-label="add"
        size="small"
        className="animate__animated animate__fadeInUp"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          paddingTop: "25px",
          paddingBottom: "25px",
          paddingRight: "13px",
          paddingLeft: "13px",
        }}
        href="https://github.com/juliswer/mern-crud"
        target="_blank"
        variant="extended"
      >
        <GitHubIcon style={{ fontSize: "40px" }} />
        &nbsp; See Repo &nbsp;
        <AddLinkIcon />
      </Fab>
    </div>
  );
};

export default Layout;
