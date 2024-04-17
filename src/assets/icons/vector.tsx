import React from "react";
import Icon, { HomeOutlined } from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const VectorSVG = () => (
    <svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        enableBackground="new 0 0 64 64"
        fill="currentColor"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            {" "}
            <rect
                x="1"
                y="53"
                stroke="#9c9c9cdd"
                strokeWidth="2"
                strokeMiterlimit="10"
                width="10"
                height="10"
            ></rect>{" "}
            <rect
                x="53"
                y="1"
                stroke="#9c9c9cdd"
                strokeWidth="2"
                strokeMiterlimit="10"
                width="10"
                height="10"
            ></rect>{" "}
            <rect
                x="27"
                y="27"
                stroke="#9c9c9cdd"
                strokeWidth="2"
                strokeMiterlimit="10"
                width="10"
                height="10"
            ></rect>{" "}
            <line
                fill="none"
                stroke="#9c9c9cdd"
                strokeWidth="2"
                strokeMiterlimit="10"
                x1="11"
                y1="53"
                x2="27"
                y2="37"
            ></line>{" "}
            <line
                fill="none"
                stroke="#9c9c9cdd"
                strokeWidth="2"
                strokeMiterlimit="10"
                x1="37"
                y1="27"
                x2="53"
                y2="11"
            ></line>{" "}
        </g>
    </svg>
);

export default function VectorIcon(props: Partial<CustomIconComponentProps>) {
    return <Icon component={VectorSVG} {...props} />;
}
