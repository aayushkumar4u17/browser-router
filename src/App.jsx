import React from "react";
import "./global.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Notfound from "./components/notfound/Notfound";
import { Toaster } from "react-hot-toast";
import Allusers from "./components/allusers/Allusers";
import EditUser from "./components/edit/EditUser";
const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allusers" element={<Allusers />} />
          <Route path="/edit/:id" element={<EditUser />}/>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
