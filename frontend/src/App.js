import {Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NoteComment from './pages/NoteComment';
import NoteDetail from './pages/NoteDetail';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/note/:id" element={<NoteDetail />}></Route>
      <Route path="/note/:id/comments/:commentId" element={<NoteComment />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default App;
