import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Mail from "./components/Mail";
import Create from "./components/Create";
import Location from "./components/Location";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/location" element={<Location />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
