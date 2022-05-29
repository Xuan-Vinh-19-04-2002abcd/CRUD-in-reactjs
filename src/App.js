import { useEffect, useState } from "react";
import "./App.css";
import Admin from "./Admin/Admin";
import Homepage from "./Home/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/Home"> Go to home</Link>
            <Link to="/admin"> Go to admin</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/Home" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
