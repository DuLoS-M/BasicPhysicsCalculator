import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useContext } from "react";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";
import { calculateVelocityAngle } from "src/utils/projectileTrayectory";

type VelocityAngleProps = {
    velocityX: number;
    velocityY: number;
};

function VelocityAngle() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: VelocityAngleProps) => {
        console.log("Received values from form: ", values);
        const result = calculateVelocityAngle(
            values.velocityX,
            values.velocityY
        );
        setResult(<div>Angle: {result.value}</div>);
    };

    return (
        <Form name="height_form" onFinish={onFinish}>
            <Form.Item
                name="velocityX"
                label="Velocity (X)"
                rules={[{ required: true }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="velocityY"
                label="Velocity (Y)"
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

export default VelocityAngle;
