import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import VelocityFromInitialVelAndTime from "./FinalVelocityFromInitialVelAndTime";

function FinalVelocityForm() {
    // time, initialVelocity, launchAngle, initialHeight, gravity
    // maxHeight, timeToMaxHeight, time, gravity

    // overlaps: time, gravity
    const onFinish = (values: any) => {
        console.log("Received values from form: ", values);
    };

    return (
        <Tabs>
            <Tabs.TabPane tab="From initial velocity and time" key="max-height-time">
                <VelocityFromInitialVelAndTime />
            </Tabs.TabPane>
        </Tabs>
    );
}

export default FinalVelocityForm;
