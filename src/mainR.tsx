import i18n, { i18nPromise } from "./i18n";
import { I18nextProvider } from "react-i18next";
import React, {
    MouseEventHandler,
    useCallback,
    useEffect,
    useState,
} from "react";
import { useTranslation } from "react-i18next";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { FloatButton, ConfigProvider, Input, Space, theme, App } from "antd";
import { MoonOutlined, SunOutlined, SettingOutlined } from "@ant-design/icons";
import ChangeLangBtn from "./components/main/ChangeLangBtn";

const Provider = ({ children }: { children: React.ReactNode }) => {
    const [dark, setDark] = useState(true);

    const changeTheme = useCallback(() => {
        setDark(!dark);
    }, [dark]);

    return (
        <ConfigProvider
            theme={{
                algorithm: dark ? theme.darkAlgorithm : theme.defaultAlgorithm,
                cssVar: true,
            }}
        >
            <App>
                <I18nextProvider i18n={i18n} defaultNS={"translation"}>
                    <FloatButton.Group
                        trigger="hover"
                        icon={<SettingOutlined />}
                    >
                        <ChangeLangBtn />
                        <FloatButton
                            icon={dark ? <SunOutlined /> : <MoonOutlined />}
                            onClick={changeTheme}
                        />
                    </FloatButton.Group>
                    {children}
                </I18nextProvider>
            </App>
        </ConfigProvider>
    );
};
i18nPromise.then(() =>
    createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <Provider>
                <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
    )
);
