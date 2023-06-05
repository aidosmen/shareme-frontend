import { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import Home from "./container/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const tezst = "dasd";

  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
