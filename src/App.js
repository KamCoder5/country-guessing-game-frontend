import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div>
      <Header />
      <RegisterPage />
      <LoginPage />
      <HomePage />
    </div>
  );
}

export default App;
