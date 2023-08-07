import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import ManualLogin from "./pages/ManualLogin";
import ConfirmEmail from "./pages/ConfirmEmail";
import LoadingScreen from "./components/LoadingScreen";
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/workspace-signin" element={<ManualLogin />}></Route>
        <Route path="/confirm-email" element={<ConfirmEmail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const General = Loadable(lazy(() => import("./pages/General")));
const Page404 = Loadable(lazy(() => import("./pages/Page404")));
