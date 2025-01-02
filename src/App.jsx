import React from "react";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import "./App.css";
const App = () => {
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  return (
    <div onContextMenu={handleContextMenu} className="h-screen w-screen flex flex-col bg-zinc-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
