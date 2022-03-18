const Home = ({ notes }) => {
  return (
    <div>
      <h1>Home</h1>
      {notes.map((note) => (
        <div key={note._id}>
          <h2>{note.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
