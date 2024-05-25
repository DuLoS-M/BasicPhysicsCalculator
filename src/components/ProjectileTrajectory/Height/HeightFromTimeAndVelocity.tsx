import React, { useContext } from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";
import { calculateHeight } from "src/utils/projectileTrayectory";

type HeightFromTimeAndVelocityProps = {
    time: number;
    initialVelocity: number;
    launchAngle: number;
    initialHeight?: number;
    gravity?: number;
};

function HeightFromTimeAndVelocity() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: HeightFromTimeAndVelocityProps) => {
        const result = calculateHeight(
            values.time,
            values.initialVelocity,
            values.launchAngle,
            values.initialHeight,
            values.gravity
        );
        setResult(<div>Height:{result.value}</div>);
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
            <Form.Item name="initialHeight" label="Initial Height">
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

export default HeightFromTimeAndVelocity;
