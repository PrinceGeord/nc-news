import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes></Routes>
      <div></div>
    </>
  );
}

export default App;
