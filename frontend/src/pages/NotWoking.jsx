import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Typography, Box } from "@mui/material";

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
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
        >
          Not working yet
        </Typography>
      </Box>
  );
};

export default NotWoking;
