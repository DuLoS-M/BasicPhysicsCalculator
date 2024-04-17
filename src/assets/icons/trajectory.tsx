import React from "react";
import Icon, { HomeOutlined } from "@ant-design/icons";
import type { GetProps } from "antd";

type CustomIconComponentProps = GetProps<typeof Icon>;

const TrajectorySVG = () => (
    <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        stroke="#deddda"
        transform="rotate(45)"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M443.733,8.533V26.88c-94.635,14.933-181.077,55.723-250.624,118.187h-48.043c-4.71,0-8.533,3.823-8.533,8.533v48.64 C78.848,270.165,41.045,353.451,26.88,443.733H8.533c-4.71,0-8.533,3.823-8.533,8.533v51.2C0,508.177,3.823,512,8.533,512h51.2 c4.71,0,8.533-3.823,8.533-8.533v-51.2c0-4.71-3.823-8.533-8.533-8.533H44.117c14.08-86.101,50.347-165.547,105.387-230.4h46.763 c4.71,0,8.533-3.823,8.533-8.533v-47.275c66.389-59.563,148.736-98.56,238.933-113.408v15.616c0,4.71,3.823,8.533,8.533,8.533h51.2 c4.71,0,8.533-3.823,8.533-8.533v-51.2C512,3.823,508.177,0,503.467,0h-51.2C447.556,0,443.733,3.823,443.733,8.533z M51.2,460.8 v34.133H17.067V460.8H51.2z M187.733,196.267H153.6v-34.133h34.133V196.267z M494.933,51.2H460.8V17.067h34.133V51.2z"></path>{" "}
            <rect
                x="460.8"
                y="17.067"
                style={{ fill: "#0000000" }}
                width="34.133"
                height="34.133"
            ></rect>{" "}
            <rect
                x="153.6"
                y="162.133"
                style={{ fill: "#0000000" }}
                width="34.133"
                height="34.133"
            ></rect>{" "}
            <rect
                x="17.067"
                y="460.8"
                style={{ fill: "#0000000" }}
                width="34.133"
                height="34.133"
            ></rect>{" "}
            <g>
                {" "}
                <rect
                    x="42.667"
                    y="460.8"
                    style={{ fill: "#0000000" }}
                    width="8.533"
                    height="34.133"
                ></rect>{" "}
                <rect
                    x="486.4"
                    y="17.067"
                    style={{ fill: "#0000000" }}
                    width="8.533"
                    height="34.133"
                ></rect>{" "}
            </g>{" "}
            <rect
                x="179.2"
                y="162.133"
                style={{ fill: "#0000000" }}
                width="8.533"
                height="34.133"
            ></rect>{" "}
        </g>
    </svg>
);

export default function TrajectoryIcon(
    props: Partial<CustomIconComponentProps>
) {
    return <Icon component={TrajectorySVG} {...props} />;
}
