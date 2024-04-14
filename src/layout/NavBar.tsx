import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

export default function NavBar() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Button onClick={() => setCollapsed(!collapsed)}>+</Button>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <UserOutlined />,
                            label: "Conversion de medidas",
                        },
                        {
                            key: "2",
                            icon: <VideoCameraOutlined />,
                            label: "Suma de vectores",
                        },
                        {
                            key: "3",
                            icon: <UploadOutlined />,
                            label: "Movimiento de proyectiles",
                        },
                        {
                            key: "4",
                            icon: <UploadOutlined />,
                            label: "MRU y MRUV",
                        },
                        {
                            key: "5",
                            icon: <UploadOutlined />,
                            label: "Primera ley de Newton",
                        },
                        {
                            key: "6",
                            icon: <UploadOutlined />,
                            label: "Segunda ley de Newton",
                        },
                        {
                            key: "7",
                            icon: <UploadOutlined />,
                            label: "Tercera ley de Newton",
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Outlet />
            </Layout>
        </Layout>
    );
}
