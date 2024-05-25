import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import VelocityAngle from "./VelocityAngle";

function VelocityAngleForm() {
    return (
        <Tabs>
            <Tabs.TabPane tab="" key="max-height-time">
                <VelocityAngle />
            </Tabs.TabPane>
        </Tabs>
    );
}

export default VelocityAngleForm;
