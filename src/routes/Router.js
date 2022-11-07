import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const Inventory = lazy(() => import("../views/Inventory.js"));
const Preparation = lazy(() => import("../views/Preparation.js"));
const PreparationList = lazy(() => import("../views/PreparationList.js"));

/*****Routes******/
const ThemeRoutes = [
  {
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/preparation" /> },
      { path: "/inventory", exact: true, element: <Inventory /> },
      { path: "/preparation", exact: true, element: <Preparation /> },
      { path: "/preparation/:patientId", exact: true, element: <PreparationList /> },
    ],
  },
];

export default ThemeRoutes;
