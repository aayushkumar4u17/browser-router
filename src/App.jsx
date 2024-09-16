import React, { lazy, Suspense } from "react";
import "./global.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Notfound from "./components/notfound/Notfound";
import { Toaster } from "react-hot-toast";
// import Allusers from "./components/allusers/Allusers";
import EditUser from "./components/edit/EditUser";
import Profile from "./components/profile/Profile";
import PrivateRoute from "./components/profile/PrivateRoute";
import Spinner1 from "./components/spinner/Spinner1";

const Allusers = lazy(() => import("./components/allusers/Allusers"));

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Suspense fallback={<Spinner1/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allusers" element={<Allusers />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
};

export default App;
