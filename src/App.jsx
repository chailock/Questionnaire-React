import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Questionnaire from "./components/Questionnaire";
import Create from "./components/Create";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Home />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Dashboard" element={<Dashboard />}></Route>
        <Route path="Questionnaire" element={<Questionnaire />}></Route>
        <Route path="Create" element={<Create />}></Route>
      </Routes>
    </>
  );
}

export default App;
