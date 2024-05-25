import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import TimeFromHeightAndVelocity from "./TimeFromHeightAndVelocity";
import TimeFromFinalVelocityAndGravity from "./TimeFromFinalVelocityAndGravity";
import TimeFromDistanceAndVelocity from "./TimeFromDistanceAndVelocity";

function TimeForm() {

    return (
        <Tabs>
            <Tabs.TabPane tab="From height and velocity" key="time-from-height-and-velocity">
                <TimeFromHeightAndVelocity />
            </Tabs.TabPane>
            <Tabs.TabPane tab="From final velocity and gravity" key="time-from-finalvel-gravity">
                <TimeFromFinalVelocityAndGravity />
            </Tabs.TabPane>
            <Tabs.TabPane tab="From distance and velocity" key="time-from-distance-and-velocity">
                <TimeFromDistanceAndVelocity />
            </Tabs.TabPane>
        </Tabs>
    );
}

export default TimeForm;
