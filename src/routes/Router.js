import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const Login = lazy(() => import("../components/login.component.js"));
const Register = lazy(() => import("../components/register.component.js"));
const Home = lazy(() => import("../views/Home.js"));
const Profile = lazy(() => import("../views/Profile.js"));
const Notifications = lazy(() => import("../views/Notifications.js"));

/*
const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
*/
/*****Routes******/

const ThemeRoutes = [
  {
    element: <FullLayout />,
    children: [
      { path: "/home", exact: true, element: <Home /> },
      { path: "/profile", exact: true, element: <Profile /> },
      { path: "/notifications", exact: true, element: <Notifications /> },
      /*
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      */
    ],
  },
  {
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/register", exact: true, element: <Register /> },
    ],
  },
];

export default ThemeRoutes;
