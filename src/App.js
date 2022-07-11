import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage.js";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Switch } from "react-router";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
