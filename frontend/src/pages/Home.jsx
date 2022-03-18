import {
  Typography,
  Container,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import {Link} from 'react-router-dom';

const Home = ({ notes }) => {
  return (
    <Container className="animate__animated animate__fadeInUp">
      <Typography variant="h2" component="h1">
        Home
      </Typography>
      {notes.map((note) => (
        <Card key={note._id} style={{ marginBottom: "30px" }}>
          <CardContent>
            <Typography variant="p" component="h6">
              {note.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><Link to={`/note/${note._id}`}>See Note</Link></Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default Home;
