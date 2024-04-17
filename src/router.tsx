import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./layout/NavBar";
import { UnitConversion } from "./pages/UnitConversion";
import SumOfVectors from "./pages/SumOfVectors";
import ProjectileTrajectory from "./pages/ProjectileTrajectory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        children: [
            {
                path: "/",
                element: (
                    <div>
                        <Link to="/contact">Contact</Link>
                        <Link to="/">Home</Link>
                    </div>
                ),
            },
            {
                path: "/unit-conversion",
                element: <UnitConversion />,
            },
            {
                path: "/vector-sum",
                element: <SumOfVectors />,
            },
            {
                path: "/projectile-movement",
                element: <ProjectileTrajectory />,
            },
        ],
    },
]);
