import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useContext } from "react";
import { calculateTimeFromHeightAndVelocity } from "src/utils/projectileTrayectory";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";

type TimeFromHeightAndVelocityProps = {
    initialVelocity: number;
    launchAngle: number;
    height: number;
    gravity?: number;
};

function TimeFromHeightAndVelocity() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: TimeFromHeightAndVelocityProps) => {
        console.log("Received values from form: ", values);
        const result = calculateTimeFromHeightAndVelocity(
            values.initialVelocity,
            values.launchAngle,
            values.height,
            values.gravity
        );
        setResult(
            <div>
                Time 1:{result[0].value} Time 2: {result[1].value} |
            </div>
        );
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
            <Form.Item
                name="height"
                label="Height"
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

export default TimeFromHeightAndVelocity;
