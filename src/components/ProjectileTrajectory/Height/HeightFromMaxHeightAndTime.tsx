import React, { useContext } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { ProjectileTrajectoryContext } from "src/components/context/ProjectileTrajectoryContext";
import { calculateHeightFromMaxHeightAndTime } from "src/utils/projectileTrayectory";

type HeightFromMaxHeightAndTimeProps = {
    maxHeight: number;
    timeToMaxHeight: number;
    time: number;
    gravity?: number;
};

function HeightFromMaxHeightAndTime() {
    let { result, setResult } = useContext(ProjectileTrajectoryContext);

    const onFinish = (values: HeightFromMaxHeightAndTimeProps) => {
        console.log("Received values from form: ", values);
        const result = calculateHeightFromMaxHeightAndTime(
            values.maxHeight,
            values.timeToMaxHeight,
            values.time,
            values.gravity
        );
        setResult(<div>Height{result.value}</div>);
    };
    return (
        <Form name="height_form" onFinish={onFinish}>
            <Form.Item
                name="maxHeight"
                label="Max Height"
                rules={[{ required: true }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="timeToMaxHeight"
                label="Time to Max Height"
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

export default HeightFromMaxHeightAndTime;
