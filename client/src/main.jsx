import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import Quizz from "./pages/Quizz";
import Results from "./pages/Results";
import MyPlants from "./pages/MyPlants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "quizz",
        element: <Quizz />,
      },
      {
        path: "myplants",
        element: <MyPlants />,
      },
      {
        path: "results/:answers",
        element: <Results />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
