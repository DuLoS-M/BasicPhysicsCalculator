import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import DistanceFromVelocityAndAngle from "./DistanceFromVelocityAndAngle";

function DistanceForm() {
    const onFinish = (values: any) => {
        console.log("Received values from form: ", values);
    };

    return (
        <Tabs>
            <Tabs.TabPane tab="" key="max-height-time">
                <DistanceFromVelocityAndAngle />
            </Tabs.TabPane>
        </Tabs>
    );
}

export default DistanceForm;
