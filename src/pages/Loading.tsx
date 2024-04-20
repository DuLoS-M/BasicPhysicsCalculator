import React from "react";
import { Spin, Flex } from "antd";
import { useTranslation } from "react-i18next";

export default function Loading() {
    const { t } = useTranslation("loading");
    return (
        <div className="w-full h-full flex flex-col justify-center">
            <Spin tip={t("loading")} size="large">
                <div className="content" />
            </Spin>
        </div>
    );
}
