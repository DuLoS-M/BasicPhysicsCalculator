import React from "react";
import type { Vector } from "src/types";
import { List, Tag } from "antd";

function ListElement({ vector, index }: { vector: Vector; index: number }) {
    return (
        <List.Item>
            <List.Item.Meta />
            <div className="flex">
                <div className="flex flex-col">
                    <div>HELLO</div>
                    <div>HELLO2</div>
                </div>

                <Tag color={vector.type == "linear" ? "orange" : "blue"}>
                    {vector.type}
                </Tag>
            </div>
        </List.Item>
    );
}

export default function VectorList({ vectors }: { vectors: Vector[] }) {
    return (
        <div className="flex">
            <List itemLayout="horizontal">
                {vectors.map((vector, index) => (
                    <ListElement vector={vector} index={index} />
                ))}
            </List>
        </div>
    );
}
