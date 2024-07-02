import "./App.css";
import Signup from "./AuthScreens/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./AuthScreens/Login";
import Contact from "./Contact/Contact";
import { createContext, useState } from "react";
import Uploadpost from "./uploadpost/Uploadpost";
import Profile from "./profile/Profile";

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
          <Route path="/uploadpost" element={<Uploadpost />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </store.Provider>
  );
}

export default App;
