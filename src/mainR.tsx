import React, {
    MouseEventHandler,
    PropsWithChildren,
    useEffect,
    useState,
} from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { FloatButton, ConfigProvider, Input, Space, theme } from "antd";
import { MoonOutlined } from "@ant-design/icons";

const ThemeConfigBtn = ({ changeTheme }: { changeTheme: () => void }) => {
    return <FloatButton icon={<MoonOutlined />} onClick={changeTheme} />;
};

const ThemeConfigComponent = () => {
    const { useToken } = theme;
    const { token } = useToken();

    const setStyleVariables = () => {
        document.body.style.setProperty(
            "--background-color",
            token.colorBgBase
        );
    };

    useEffect(() => {
        setStyleVariables();
    });
    return <></>;
};

const Provider = ({ children }: { children: React.ReactNode }) => {
    const [dark, setDark] = useState(true);

    const changeTheme = () => {
        setDark(!dark);
    };

    return (
        <ConfigProvider
            theme={{
                // 1. Use dark algorithm
                algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,

                // 2. Combine dark algorithm and compact algorithm
                // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
            }}
        >
            <ThemeConfigBtn changeTheme={changeTheme} />
            <ThemeConfigComponent />
            {children}
        </ConfigProvider>
    );
};
const root = createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
