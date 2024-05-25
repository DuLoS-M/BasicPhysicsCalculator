import React, { useContext } from "react";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";

export default function Result() {
    const { result } = useContext(ProjectileTrajectoryContext);

    if (!result) {
        return null;
    }

    return result;
}
