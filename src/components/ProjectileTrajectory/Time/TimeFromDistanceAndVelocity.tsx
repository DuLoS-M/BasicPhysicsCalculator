import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useContext } from "react";
import { calculateTimeFromDistanceAndVelocity } from "src/utils/projectileTrayectory";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";

type TimeFromDistanceAndVelocityProps = {
    distance: number;
    initialVelocity: number;
    launchAngle: number;
};

function TimeFromDistanceAndVelocity() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: TimeFromDistanceAndVelocityProps) => {
        console.log("Received values from form: ", values);
        const result = calculateTimeFromDistanceAndVelocity(
            values.distance,
            values.initialVelocity,
            values.launchAngle
        );
        setResult(<div>Time:{result.value} | Formula: x/VoX</div>);
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
                name="distance"
                label="Distance"
                rules={[{ required: true }]}
            >
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

export default TimeFromDistanceAndVelocity;
