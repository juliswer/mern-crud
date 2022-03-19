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
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";

const Home = ({ notes }) => {
  const date = new Date();

  const testDate = (createdDate, updatedDate, note) => {
    if (createdDate === updatedDate) {
      return (
        <Typography
          color="text.secondary"
          variant="p"
          component="h6"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "14px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CalendarMonthTwoToneIcon /> Created At:{" "}
          {date.toDateString(note.createdAt).slice(3)}
        </Typography>
      );
    } else if (createdDate !== updatedDate) {
      return (
        <Typography
          color="text.secondary"
          variant="p"
          component="h6"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "italic",
            fontSize: "14px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CalendarMonthTwoToneIcon /> Updated At:{" "}
          {date.toDateString(note.updatedAt).slice(3)}
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
              <Card style={{ marginBottom: "30px" }}>
                <CardContent>
                  <Typography variant="h6" component="h6" gutterBottom>
                    {note.title}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
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
                    <CheckCircleOutlineTwoToneIcon
                      style={{ color: "#F20000" }}
                    />
                  ) : (
                    <CheckCircleOutlineTwoToneIcon
                      style={{ color: "#50B743" }}
                    />
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
