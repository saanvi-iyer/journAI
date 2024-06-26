/*
 * Title:
 * @author: Saanvi Iyer
 * @since 15-04-2024
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import AllEntries from "./pages/AllEntries";
import StarredEntries from "./pages/StarredEntries"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit" element={<Edit />} />
          <Route exact path="/all/entries" element={<AllEntries />} />
          <Route exact path="/starred/entries" element={<StarredEntries />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
