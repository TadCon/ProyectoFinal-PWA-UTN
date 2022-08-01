import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Formulario from "./components/Formulario";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/monopoly" element={<Main />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
