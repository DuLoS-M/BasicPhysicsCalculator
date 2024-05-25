import React from "react";
import HeightForm from "src/components/ProjectileTrajectory/Height/HeightForm";
import MaxHeightForm from "src/components/ProjectileTrajectory/MaxHeight/MaxHeightForm";
import DistanceForm from "src/components/ProjectileTrajectory/Distance/DistanceForm";
import TimeForm from "src/components/ProjectileTrajectory/Time/TimeForm";
import InitialVelocityForm from "src/components/ProjectileTrajectory/InitialVelocity/InitialVelocityForm";
import FinalVelocityForm from "src/components/ProjectileTrajectory/FinalVelocity/FinalVelocityForm";
import VelocityAngleForm from "src/components/ProjectileTrajectory/VelocityAngle/VelocityAngleForm";

function DetermineForm({ variable }: { variable: string }) {
    switch (variable) {
        case "height":
            return <HeightForm />;
        case "h-max":
            return <MaxHeightForm />;
        case "distance":
            return <DistanceForm />;
        case "flight-time":
            return <TimeForm />;
        case "initial-velocity":
            return <InitialVelocityForm />;
        case "final-velocity":
            return <FinalVelocityForm />;
        case "angle":
            return <VelocityAngleForm />;
        default:
            return <HeightForm />;
    }
}

export default DetermineForm;
