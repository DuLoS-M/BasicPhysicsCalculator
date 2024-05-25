import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { useContext } from "react";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";
import { calculateInitialVelocity } from "src/utils/projectileTrayectory";

type InitialVelocityProps = {
    finalVelocity: number;
    time: number;
    gravity?: number;
};

function VelocityFromFinalVelAndTime() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: InitialVelocityProps) => {
        console.log("Received values from form: ", values);
        const result = calculateInitialVelocity(
            values.finalVelocity,
            values.time,
            values.gravity
        );
        setResult(
            <div>velocity(y): {result.value} | Formula: Vfy - g * t</div>
        );
    };
    return (
        <Form name="height_form" onFinish={onFinish}>
            <Form.Item name="time" label="Time" rules={[{ required: true }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="finalVelocity"
                label="Final Velocity"
                rules={[{ required: true }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item name="time" label="Time" rules={[{ required: true }]}>
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

export default VelocityFromFinalVelAndTime;
