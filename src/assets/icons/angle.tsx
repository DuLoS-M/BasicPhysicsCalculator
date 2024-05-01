import React from "react";
import Icon, { HomeOutlined } from "@ant-design/icons";
import type { GetProps } from "antd";
import styles from "./styles/angle.module.css";

type CustomIconComponentProps = GetProps<typeof Icon>;

const AngleSVG = () => (
    <svg
        version="1.1"
        id="Icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        width="1.25rem"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <polyline
                className={styles.st0}
                points="30,27 3,27 25,6 "
            ></polyline>
            <path
                className={styles.st6}
                d="M22.1,9.8C25.2,13.7,27,18.6,27,24c0,1.4-0.1,2.7-0.3,4"
            ></path>
        </g>
    </svg>
);

export default function AngleIcon(props: Partial<CustomIconComponentProps>) {
    return <Icon component={AngleSVG} {...props} />;
}
