import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./layout/NavBar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        children: [
            {
                path: "/",
                element: (
                    <div>
                        About
                        <Link to="/contact">Contact</Link>
                        <Link to="/">Home</Link>
                    </div>
                ),
            },
            {
                path: "/contact",
                element: (
                    <div>
                        Contact
                        <Link to="/about">About</Link>
                        <Link to="/">Home</Link>
                    </div>
                ),
            },
        ],
    },
]);
