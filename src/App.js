import { Routes, Route } from "react-router-dom";
import "./App.css";
import Head from "./components/Head";
import Dashboard from "./components/Dashboard";
import SchoolLunch from "./components/SchoolLunch";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Head />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/school-lunch" element={<SchoolLunch />} />
        <Route path="/contact-us-subway" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
