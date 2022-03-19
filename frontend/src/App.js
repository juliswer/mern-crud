import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NoteComment from "./pages/NoteComment";
import NoteDetail from "./pages/NoteDetail";
import NotWorking from "./pages/NotWoking";
import CreateNote from "./pages/CreateNote";

function App() {
  const [notesInfo, setNotesInfo] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      await fetch("http://localhost:4000/api").then((data) => {
        data.json().then((data) => {
          setNotesInfo(data);
        });
      });

      const res = await axios.get("http://localhost:4000/api");
      const data = res.data;
      setNotesInfo(data);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home notes={notesInfo} />} />
      <Route path="/create" element={<CreateNote />}/>
      <Route path="/note/:id" element={<NoteDetail />} />
      <Route path="/note/:id/comments/:commentId" element={<NoteComment />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<NotWorking />} />
    </Routes>
  );
}

export default App;
