import logo from "./logo.svg";
import "./App.css";
import Signup from "./AuthScreens/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./AuthScreens/Login";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { createContext, useState } from "react";

export const store = createContext();
function App() {
  const [token, setToken] = useState(null);
  return (
    <store.Provider value={{ token, setToken }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </store.Provider>
  );
}

export default App;
