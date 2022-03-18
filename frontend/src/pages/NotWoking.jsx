import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Snackbar, Stack, Grid, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import SendIcon from '@mui/icons-material/Send';

export const SnackBar = () => (
  <Snackbar autoHideDuration={6000}>
    <Alert severity="error" sx={{ width: "100%" }}>
      This is a success message!
    </Alert>
  </Snackbar>
);

const NotWoking = () => {
  const navigate = useNavigate();

  const fetchData = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:4000/api");
      if (response) navigate("/");
    } catch (error) {
      console.log(error);
      <SnackBar />;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh",}}
      >
        <img
          src="https://c.tenor.com/b4SAZN3xkM4AAAAM/andyrentz-giant-bomb.gif"
          alt="error"
          style={{ width: "300px", height: "300px" }}
          className="animate__animated animate__zoomIn"
        />
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className="animate__animated animate__fadeInDown"
        >
          <span style={{fontWeight: "bold", textDecoration: "line-through"}}>Sh***t!</span> Maybe the backend is down
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          align="center"
        >
          Come back soon!
        </Typography>
        <Button href="mailto:julianswer36@gmail.com" endIcon={<SendIcon />} variant="outlined" color="error" style={{marginTop: "10px"}}>Contact me to fix it!</Button>
      </Grid>
    </div>
  );
};

export default NotWoking;
