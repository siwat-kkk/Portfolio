import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component
import Navbar from "./component/navbar/Navbar";

// Pages
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
