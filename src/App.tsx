import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Book from "modules/Book";
import Canvas from "modules/Canvas";
import Home from "modules/Home";
import ToasterInteraction from "modules/toasterInteraction";
import "styles/global.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Books" element={<Book />}></Route>
        <Route path="/Canvas" element={<Canvas />}></Route>
        <Route path="/Board" element={<ToasterInteraction />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
