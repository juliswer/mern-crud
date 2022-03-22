import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  TextField,
} from "@mui/material";

const CreateNote = () => {
  return (
    <Grid
      container
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      className="animate__animated animate__fadeInUp"
    >
      <Grid item xs={6} spacing={3}>
        <Card
          style={{
            marginBottom: "30px",
            backgroundColor: "rgba(31,41,55,0.7)",
            color: "#fff",
            boxShadow: "5px 5px 5px black",
            padding: "20px",
          }}
          variant="outlined"
        >
          <CardContent>
            <Typography
              variant="h6"
              component="h6"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Create your note!
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <TextField label="Write a title" variant="standard" autoFocus color="warning" inputProps={{style: {color: '#fff'}}} />
              <TextField label="Write a title" variant="outlined" />
            </div>
          </CardContent>

          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          ></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CreateNote;
