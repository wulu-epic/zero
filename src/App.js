import React from "react";
import "./index.css";

import Home from "./routes/Home";
import Faq from "./routes/Faq";
import Contact from "./routes/Contact";
import Purchase from "./routes/Purchase";

import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home/> }/>
        <Route path="" element={<Purchase/> }/>
        <Route path="" element={<Faq/> }/>
        <Route path="" element={<Contact/> }/>
      </Routes>
    </>
  );
}

export default App;
