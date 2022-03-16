import { useEffect, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NoteComment from "./pages/NoteComment";
import NoteDetail from "./pages/NoteDetail";
import axios from "axios";
import NotWorking from "./pages/NotWoking";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {

  export const notesData = createContext();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const navigate = useNavigate();

  const fetchData = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:4000/api");
      const data = response.data();
      res.json(data);
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note/:id" element={<NoteDetail />} />
        <Route path="/note/:id/comments/:commentId" element={<NoteComment />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<NotWorking />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
