import "./App.css";
import React from "react";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <RegisterPage />
      <LoginPage />
    </div>
  );
}

export default App;
