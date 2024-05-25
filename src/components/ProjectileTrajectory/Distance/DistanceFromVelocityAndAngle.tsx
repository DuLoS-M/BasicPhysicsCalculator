import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useContext } from "react";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";
import { calculateDistance } from "src/utils/projectileTrayectory";

type DistanceFromVelocityAndAngleProps = {
    initialVelocity: number;
    launchAngle: number;
    time: number;
};

function DistanceFromVelocityAndAngle() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: DistanceFromVelocityAndAngleProps) => {
        console.log("Received values from form: ", values);
        const result = calculateDistance(
            values.initialVelocity,
            values.launchAngle,
            values.time
        );
        setResult(<div>Distance:{result.value}</div>);
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
            <Form.Item name="time" label="Time" rules={[{ required: true }]}>
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

export default DistanceFromVelocityAndAngle;
