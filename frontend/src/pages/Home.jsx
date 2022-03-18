const Home = ({ notes }) => {
  return (
    <div className="animate__animated animate__fadeInUp">
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
