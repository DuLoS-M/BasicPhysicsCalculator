import React, { Suspense, useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import { SwapOutlined, QuestionOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import VectorIcon from "../assets/icons/vector";
import TrajectoryIcon from "../assets/icons/trajectory";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Loading from "src/pages/Loading";
import { startTransition } from "react";

const { Header, Sider, Content } = Layout;

export default function NavBar() {
    const { t } = useTranslation("NavBar");
    const {
        token: { colorBorderSecondary },
    } = theme.useToken();

    return (
        <Layout hasSider className="min-h-screen">
            <Sider
                className="flex flex-col border-r"
                collapsible
                width={240}
                theme="light"
                style={{ borderColor: colorBorderSecondary }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    style={{ border: "none" }}
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <SwapOutlined />,
                            label: (
                                <NavLink to="/unit-conversion">
                                    {t("unit-conversion")}
                                </NavLink>
                            ),
                        },
                        {
                            key: "2",
                            icon: <VectorIcon />,
                            label: (
                                <NavLink to="/vector-sum">
                                    {t("vector-sum")}
                                </NavLink>
                            ),
                        },
                        {
                            key: "3",
                            icon: <TrajectoryIcon />,
                            label: (
                                <NavLink to="/projectile-movement">
                                    {t("projectile-movement")}
                                </NavLink>
                            ),
                        },
                        {
                            key: "4",
                            icon: <QuestionOutlined />,
                            label: t("urm-uam"),
                        },
                        {
                            key: "5",
                            icon: <QuestionOutlined />,
                            label: t("newton-first-law"),
                        },
                        {
                            key: "6",
                            icon: <QuestionOutlined />,
                            label: t("newton-second-law"),
                        },
                        {
                            key: "7",
                            icon: <QuestionOutlined />,
                            label: t("newton-third-law"),
                        },
                    ]}
                />
            </Sider>
            <Suspense>
                <Suspense fallback={<Loading />}>
                    <Layout>
                        <Outlet />
                    </Layout>
                </Suspense>
            </Suspense>
        </Layout>
    );
}
