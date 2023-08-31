import React, { Component, Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Landing from "./pages/Landing";
import ManualLogin from "./pages/ManualLogin";
import ConfirmEmail from "./pages/ConfirmEmail";
import LoadingScreen from "./components/LoadingScreen";
// import FirstLogin from "./pages/FirstLogin";
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function App() {
  localStorage.setItem("loggedIn", false);
  let workspaceId = localStorage.getItem("workspaceId");
  let userId = localStorage.getItem("userId");
  if (workspaceId != null && userId != null)
    localStorage.setItem("loggedIn", true);
  let loggedIn = localStorage.getItem("loggedIn");
  debugger;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/get-started" element={<FirstLogin />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/workspace-signin" element={<ManualLogin />}></Route>
        <Route path="/confirm-email" element={<ConfirmEmail />}></Route>
        <Route
          path="/"
          element={
            loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/" />
          }
        />
        <Route
          path="/dashboard"
          element={
            loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/" />
          }
        />
        <Route
          path="/get-started"
          element={
            !loggedIn && userId != "null" ? (
              <Navigate to="/get-started" />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const Dashboard = Loadable(lazy(() => import("./pages/Dashboard")));
const Page404 = Loadable(lazy(() => import("./pages/Page404")));
const Landing = Loadable(lazy(() => import("./pages/Landing")));
const FirstLogin = Loadable(lazy(() => import("./pages/FirstLogin")));
