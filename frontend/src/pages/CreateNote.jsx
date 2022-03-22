import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

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
              variant="h3"
              component="h1"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Create your note!
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <TextField
                label="Write a title"
                style={{ width: "13vw" }}
                variant="standard"
                autoFocus
                color="warning"
                InputProps={{ style: { color: "#fff" } }}
                InputLabelProps={{ style: { color: "#fff" } }}
              />
              <TextField
                label="Write a title"
                style={{ width: "13vw" }}
                variant="standard"
                color="warning"
                InputProps={{ style: { color: "#fff" } }}
                InputLabelProps={{ style: { color: "#fff" } }}
              />
            </div>
          </CardContent>

          <CardActions>
            <Button style={{margin: 'auto'}} variant='outlined' color='success' endIcon={<NoteAddIcon />}>Add Note</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CreateNote;
