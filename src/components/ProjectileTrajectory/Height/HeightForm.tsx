import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import HeightFromMaxHeightAndTime from "./HeightFromMaxHeightAndTime";
import HeightFromTimeAndVelocity from "./HeightFromTimeAndVelocity";

function HeightForm() {
    // time, initialVelocity, launchAngle, initialHeight, gravity
    // maxHeight, timeToMaxHeight, time, gravity

    // overlaps: time, gravity
    const onFinish = (values: any) => {
        console.log("Received values from form: ", values);
    };

    return (
        <Tabs>
            <Tabs.TabPane tab="From Time and Velocity" key="time-velocity">
                <HeightFromTimeAndVelocity />
            </Tabs.TabPane>
            <Tabs.TabPane tab="From Max Height and Time" key="max-height-time">
                <HeightFromMaxHeightAndTime />
            </Tabs.TabPane>
        </Tabs>
    );
}

export default HeightForm;
