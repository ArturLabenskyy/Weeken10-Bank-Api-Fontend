import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home.page.js";
import UserPage from "./pages/User.page.js";
import AccountPage from "./pages/Account.page.js";
import CreateUserPage from "./pages/CreateUser.page.js";

import "./style.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/users/:id",
        element: <UserPage />,
    },
    {
        path: "/accounts/:id",
        element: <AccountPage />,
    },
    {
        path: "/create-user",
        element: <CreateUserPage />,
    },
    {
        path: "*",
        element: <div className="error-page">Error!!!!!</div>,
    },
]);

function App() {
    return (
        <div className="main">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
