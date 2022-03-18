import {Typography, Container} from '@mui/material';

const Home = ({ notes }) => {
  return (
    <Container className="animate__animated animate__fadeInUp">
      <Typography variant="h2" component="h1">Home</Typography>
      {notes.map((note) => (
        <div key={note._id}>
          <h2>{note.title}</h2>
        </div>
      ))}
    </Container>
  );
};

export default Home;
