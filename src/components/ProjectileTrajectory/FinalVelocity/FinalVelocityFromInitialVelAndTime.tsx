import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { useContext } from "react";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";
import { calculateVelocity } from "src/utils/projectileTrayectory";

function FinalVelocityFromInitialVelAndTime() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    type FinalVelocityFromInitialVelAndTimeProps = {
        initialVelocity: number;
        launchAngle: number;
        time: number;
        gravity?: number;
    };

    const onFinish = (values: FinalVelocityFromInitialVelAndTimeProps) => {
        console.log("Received values from form: ", values);
        const result = calculateVelocity(
            values.initialVelocity,
            values.launchAngle,
            values.time,
            values.gravity
        );
        setResult(
            <div>
                Velocity: {result.magnitude} Angle: {result.angle}
            </div>
        );
    };
    return (
        <Form name="height_form" onFinish={onFinish}>
            <Form.Item name="time" label="Time" rules={[{ required: true }]}>
                <InputNumber />
            </Form.Item>
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
            <Form.Item name="time" label="Time">
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

export default FinalVelocityFromInitialVelAndTime;
