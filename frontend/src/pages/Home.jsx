import {
  Typography,
  Grid,
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import AddLinkTwoToneIcon from "@mui/icons-material/AddLinkTwoTone";
import { Link } from "react-router-dom";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import SpeedDial from "../components/SpeedDial";
import Accordion from "../components/Accordion";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ReactTimeAgo from "react-time-ago";
import axios from "axios";

const Home = ({ notes }) => {
  
  const toggleDone = async (id) => {
    await axios.put(`http://localhost:4000/api/note/${id}/toggleDone`)
  }

  const testDate = (createdDate, updatedDate, note) => {
    if (createdDate === updatedDate) {
      return (
        <Typography
          variant="p"
          component="h6"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "14px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <AccessTimeOutlinedIcon />
          &nbsp;Created&nbsp;
          <ReactTimeAgo date={note.createdAt} locale="en-US" />
        </Typography>
      );
    } else if (createdDate !== updatedDate) {
      return (
        <Typography
          variant="p"
          component="h6"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "14px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <AccessTimeOutlinedIcon />
          &nbsp;Updated&nbsp;
          <ReactTimeAgo date={note.updatedAt} locale="en-US" />
        </Typography>
      );
    }
  };

  return (
    <div>
      <Container
        className="animate__animated animate__fadeInUp"
        style={{ marginTop: "20px" }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          NotiApp
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Make, read and share your notes!
        </Typography>
        <Grid container spacing={2}>
          {notes.map((note) => (
            <Grid item xs={4} key={note._id}>
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
                  <Typography variant="h6" component="h6" gutterBottom>
                    {note.title}
                  </Typography>
                  <Typography color="" gutterBottom>
                    {note.description}
                  </Typography>
                  {testDate(note.createdAt, note.updatedAt, note)}
                </CardContent>

                <Accordion note={note} />
                <CardActions
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    endIcon={<AddLinkTwoToneIcon />}
                    variant="text"
                    color="warning"
                    size="medium"
                  >
                    <Link
                      to={`/note/${note._id}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                      target="_blank"
                    >
                      See Note
                    </Link>
                  </Button>
                  {note.done === false ? (
                    <Button onClick={toggleDone(note._id)}>
                      <CheckCircleOutlineTwoToneIcon
                        style={{ color: "#50B743" }}
                      />
                    </Button>
                  ) : (
                    <Button>
                      <CheckCircleOutlineTwoToneIcon
                        style={{ color: "#F20000" }}
                      />
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <SpeedDial />
    </div>
  );
};

export default Home;
