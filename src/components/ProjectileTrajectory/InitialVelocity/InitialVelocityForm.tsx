import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import VelocityFromFinalVelAndTime from "./VelocityFromFinalVelAndTime";
function InitialVelocityForm() {
    // time, initialVelocity, launchAngle, initialHeight, gravity
    // maxHeight, timeToMaxHeight, time, gravity

    // overlaps: time, gravity
    const onFinish = (values: any) => {
        console.log("Received values from form: ", values);
    };

    return (
        <Tabs>
            <Tabs.TabPane tab="From final velocity and time" key="max-height-time">
                <VelocityFromFinalVelAndTime />
            </Tabs.TabPane>
        </Tabs>
    );
}

export default InitialVelocityForm;
