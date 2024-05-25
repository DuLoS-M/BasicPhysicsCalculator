import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { calculateMaxHeight } from "src/utils/projectileTrayectory";
import { useContext } from "react";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";

type MaxHeightFromVelocityAndAngleProps = {
    InitialVelocity: number;
    LaunchAngle: number;
    Gravity?: number;
};

export default function MaxHeightFromVelocityAndAngle() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: MaxHeightFromVelocityAndAngleProps) => {
        console.log("Received values from form: ", values);
        const result = calculateMaxHeight(
            values.InitialVelocity,
            values.LaunchAngle,
            values.Gravity
        );
        setResult(<div>Max height{result.value}</div>);
    };
    return (
        <Form name="height_form" onFinish={onFinish}>
            <Form.Item
                name="initialVelocity"
                label="Initial Velocity"
                rules={[{ required: true }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="launchAngle"
                label="Launch Angle"
                rules={[{ required: true }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item name="gravity" label="Gravity">
                <InputNumber />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
