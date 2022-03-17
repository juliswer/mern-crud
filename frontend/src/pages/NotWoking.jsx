import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Box, Grid } from "@mui/material";
import "animate.css";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Checkbox from "@mui/icons-material/CheckBox";
import Stack from "@mui/material/Stack";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const NotWoking = () => {
  const navigate = useNavigate();

  const fetchData = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:4000/api");
      if (response) navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    fetchData();
  }, []);

  return (
    <div>
      <Grid container alignItems="center" justifyContent="center" style={{display: "grid"}}>
        <img
          src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/10/Stop-Animation-Blog-Post-Wave.gif"
          alt="error"
          className="animate__animated animate__zoomIn"
        />

        <Typography
          variant="h3"
          component="h1"
          align="center"
          className="animate__animated animate__fadeInDown"
        >
          Wow! Maybe the backend is down
        </Typography>
        <Alert severity="error">This is a success alert — check it out!</Alert>
      </Grid>
    </div>
  );
};

export default NotWoking;
