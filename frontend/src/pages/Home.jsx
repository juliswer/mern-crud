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
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';

const Home = ({ notes }) => {
  return (
    <Container
      className="animate__animated animate__fadeInUp"
      style={{ marginTop: "20px" }}
    >
      <Typography variant="h2" component="h1">
        Home
      </Typography>
      <Grid container spacing={2}>
        {notes.map((note) => (
          <Grid item xs={3} key={note._id}>
            <Card style={{ marginBottom: "30px" }}>
              <CardContent>
                <Typography variant="h6" component="h6">
                  {note.title}
                </Typography>
              </CardContent>
              <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
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
                  <CheckCircleOutlineTwoToneIcon style={{color: '#F20000'}} />
                ) : (
                  <CheckCircleOutlineTwoToneIcon style={{color: '#50B743'}} />
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
