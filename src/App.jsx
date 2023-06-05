import { useEffect, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import Home from "./container/Home";
import "./App.css";
import { fetchUser } from "./utils/fetchUser";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();
    if (!user) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
