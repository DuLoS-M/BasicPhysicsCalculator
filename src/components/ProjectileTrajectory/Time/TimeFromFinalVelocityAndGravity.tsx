import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useContext } from "react";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";
import { calculateTimeFromFinalVelocityAndGravity } from "src/utils/projectileTrayectory";

type TimeFromFinalVelocityAndGravityProps = {
    initialVelocity: number;
    finalVelocity: number;
    gravity?: number;
};

function TimeFromFinalVelocityAndGravity() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: TimeFromFinalVelocityAndGravityProps) => {
        console.log("Received values from form: ", values);
        const result = calculateTimeFromFinalVelocityAndGravity(
            values.initialVelocity,
            values.finalVelocity,
            values.gravity
        );
        setResult(<div>Time:{result.value} | Formulas: (Vfy - Voy) / g</div>);
    };

    return (
        <Form name="height_form" onFinish={onFinish}>
            <Form.Item
                name="initialVelocity"
                label="Initial Velocity(y)"
                rules={[{ required: true }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="finalVelocity"
                label="Final Velocity(y)"
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

export default TimeFromFinalVelocityAndGravity;
