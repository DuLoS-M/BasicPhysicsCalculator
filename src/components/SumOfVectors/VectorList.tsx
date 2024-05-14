import React from "react";
import type { ComponentVector, LinearVector, Vector } from "src/types";
import { List, Tag } from "antd";
import AngleIcon from "src/assets/icons/angle";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, theme } from "antd";

function ComponentVector({ vector }: { vector: ComponentVector }) {
    return (
        <div>
            X: {vector.x}
            <span className="text"> | </span>
            Y: {vector.y}
            <span> | </span>
            Z: {vector.z}
        </div>
    );
}
function LinearVector({ vector }: { vector: LinearVector }) {
    return (
        <div>
            |v|: {vector.magnitude}
            <span> | </span>
            <AngleIcon title="angle from x to y" />: {vector.phi}
            <span> | </span>
            <AngleIcon title="angle from x to z" />: {vector.theta}
        </div>
    );
}

function ListElement({
    vector,
    index,
    onDelete,
}: {
    vector: Vector;
    index: number;
    onDelete: (index: number) => void;
}) {
    return (
        <List.Item
            actions={[
                <Button
                    onClick={() => onDelete(index)}
                    danger
                    icon={<DeleteOutlined />}
                />,
            ]}
        >
            {/* <List.Item.Meta /> */}
            <div className="flex flex-col mr-5">
                {vector.type === "linear" ? (
                    <LinearVector vector={vector} />
                ) : (
                    <ComponentVector vector={vector} />
                )}
            </div>

            <Tag color={vector.type === "linear" ? "orange" : "blue"}>
                {vector.type}
            </Tag>
        </List.Item>
    );
}

export default function VectorList({
    vectors,
    onDelete,
}: {
    vectors: Vector[];
    onDelete: (index: number) => void;
}) {
    const {
        token: { colorBorderSecondary, colorBgContainer },
    } = theme.useToken();
    return (
        <div className="w-auto">
            <List
                bordered
                header={<div>Vectores</div>}
                style={{
                    minWidth: "336px",
                    maxHeight: "400px",
                    overflowY: "auto",
                }}
            >
                {vectors.map((vector, index) => (
                    <ListElement
                        key={index}
                        vector={vector}
                        index={index}
                        onDelete={onDelete}
                    />
                ))}
            </List>
        </div>
    );
}
