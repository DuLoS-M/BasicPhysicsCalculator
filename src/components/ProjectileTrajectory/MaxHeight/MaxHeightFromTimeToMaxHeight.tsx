import React from "react";
import { Form, Input, Button, InputNumber } from "antd";
import { useContext } from "react";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";
import { calculateMaxHeightFromTimeToMaxHeight } from "src/utils/projectileTrayectory";

type MaxHeightFromTimeToMaxHeightProps = {
    timeToMaxHeight: number;
    gravity?: number;
};

export default function MaxHeightFromTimeToMaxHeight() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: MaxHeightFromTimeToMaxHeightProps) => {
        console.log("Received values from form: ", values);
        const result = calculateMaxHeightFromTimeToMaxHeight(
            values.timeToMaxHeight,
            values.gravity
        );
        setResult(<div>Max height{result.value}</div>);
    };
    return (
        <Form name="height_form" onFinish={onFinish}>
            <Form.Item
                name="timeToMaxHeight"
                label="Time to Max Height"
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
