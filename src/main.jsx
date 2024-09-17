import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UsersProvider from "./contexts/UsersProvider.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import User from "./pages/User.jsx";
import Create from "./pages/Create.jsx";
import Update from "./pages/Update.jsx";

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
                path: "create",
                element: <Create />,
            },
            {
                path: "user/:userId",
                element: <User />,
            },
            {
                path: "update/:userId",
                element: <Update />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UsersProvider>
            <RouterProvider router={router} />
        </UsersProvider>
    </React.StrictMode>
);
