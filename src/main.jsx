import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ReactProjects from "./Pages/ReactProjects.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "ReactProjects",
        element: <ReactProjects />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
