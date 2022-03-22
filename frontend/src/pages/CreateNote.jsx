import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateNote = () => {
  const [noteFormInfo, setNoteFormInfo] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setNoteFormInfo({
      ...noteFormInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/notes/new",
        noteFormInfo
      );
      console.log(res);
      if (res.status === 200) {
        console.log("posted succesfully");
        toast.success("Posted Succesfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid
      container
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      className="animate__animated animate__fadeInUp"
    >
      <Grid item xs={6} spacing={3}>
        <form onSubmit={handleSubmit}>
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
                  name="title"
                  color="warning"
                  InputProps={{ style: { color: "#fff" } }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  onChange={handleChange}
                />
                <TextField
                  label="Write a title"
                  style={{ width: "13vw" }}
                  variant="standard"
                  color="warning"
                  name="description"
                  InputProps={{ style: { color: "#fff" } }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  onChange={handleChange}
                />
              </div>
            </CardContent>

            <CardActions>
              <Button
                style={{ margin: "auto" }}
                variant="outlined"
                color="success"
                endIcon={<NoteAddIcon />}
                onClick={handleSubmit}
              >
                Add Note
              </Button>
            </CardActions>
          </Card>
        </form>
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

export default CreateNote;
