import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Snackbar, Stack } from "@mui/material";
import Alert from "@mui/material/Alert";

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
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        justifyItems="center"
      >
          <img
            src="https://c.tenor.com/b4SAZN3xkM4AAAAM/andyrentz-giant-bomb.gif"
            alt="error"
            style={{ width: "100px", height: "100px" }}
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
      </Stack>
    </div>
  );
};

export default NotWoking;
