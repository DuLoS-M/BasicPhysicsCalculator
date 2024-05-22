import React, { useState } from "react";
import { Select, Typography } from "antd";

/*
Variables to find:
Initial Height ###
Height (y)
H-max
Distance (x)
D-max?
Flight Time
Initial Velocity
Final Velocity
Angle of the velocity
*/
const { Title } = Typography;

export default function ProjectileTrajectory() {
    const [variable, setVariable] = useState<string>("height");
    return (
        <div className="flex flex-col items-center">
            <Title>Projectile Trajectory</Title>
            <Select
                placeholder="Select variable to calculate"
                className="min-w-56"
                value={variable}
                onChange={(value) => setVariable(value)}
            >
                <Select.Option value="height">Height (y)</Select.Option>
                <Select.Option value="h-max">H-max</Select.Option>
                <Select.Option value="distance">Distance (x)</Select.Option>
                {/* <Select.Option value="d-max">D-max</Select.Option> */}
                {/* <Select.Option value="velocity">Velocity</Select.Option> */}
                <Select.Option value="flight-time">Flight time</Select.Option>
                <Select.Option value="initial-velocity">
                    Initial velocity
                </Select.Option>
                <Select.Option value="final-velocity">
                    Final velocity
                </Select.Option>
                <Select.Option value="angle">
                    Angle of the velocity
                </Select.Option>
            </Select>
            
        </div>
    );
}
