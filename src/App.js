import React from "react";
import Navbar from "./Components/Inc/Navbar";
import Home from './Components/Pages/Home';
import Aboutus from "./Components/Pages/About";
import Contactus from "./Components/Pages/Contact";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="./Pages/Home" component={Home}><Home /></Route>
        <Route path="/About"><Aboutus /></Route>
        <Route path="/Contact"><Contactus /></Route>
      </div>
    </Router>
  )

}

export default App;
