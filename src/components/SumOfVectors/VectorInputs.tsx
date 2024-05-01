import React, { useState } from "react";
import { Row, Col, Space, Flex, InputNumber, Select, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";
import { UnitSelect } from "src/components/UnitConversion/UnitSelect";
import { capitalizeFirst } from "src/utils/strings";
import { CopyOutlined, SwapOutlined, PlusOutlined } from "@ant-design/icons";
import AngleIcon from "src/assets/icons/angle";
import type { VectorType, Vector } from "src/types";

export default function VectorInputs({
    onVectorAdd,
}: {
    onVectorAdd: (vector: Vector) => void;
}) {
    const { t } = useTranslation("SumOfVectors");
    const [vectorType, setVectorType] = useState<VectorType>("linear");
    const [linearVectorValues, setLinearVectorValues] = useState({
        magnitude: 0,
        theta: 0,
        phi: 0,
    });
    const [componentVectorValues, setComponentVectorValues] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    function handleTypeChange() {
        setVectorType(vectorType === "linear" ? "component" : "linear");
    }

    function handleVectorCreation() {
        if (vectorType === "linear") {
            onVectorAdd({
                ...linearVectorValues,
                type: "linear",
            });
            return;
        }
        onVectorAdd({ ...componentVectorValues, type: "component" });
    }

    return (
        <div className="flex gap-2 flex-col items-center ">
            <Button
                className="w-fit"
                icon={<SwapOutlined />}
                onClick={handleTypeChange}
                title={t("change-vector-type")}
            >
                {vectorType === "linear"
                    ? t("linear-form")
                    : t("component-form")}
            </Button>
            {vectorType === "linear" ? (
                <>
                    <InputNumber
                        addonBefore={
                            <div
                                style={{ cursor: "default" }}
                                title={t("magnitude")}
                            >
                                |v|
                            </div>
                        }
                        placeholder={t("magnitude")}
                        value={linearVectorValues.magnitude}
                        onChange={(value) => {
                            setLinearVectorValues((prev) => ({
                                ...prev,
                                magnitude: value,
                            }));
                        }}
                    />
                    <InputNumber
                        addonBefore={<AngleIcon title={t("angle")} />}
                        placeholder={t("angle-from-x-to-y")}
                        value={linearVectorValues.phi}
                        onChange={(value) => {
                            setLinearVectorValues((prev) => ({
                                ...prev,
                                phi: value,
                            }));
                        }}
                    />
                    <InputNumber
                        addonBefore={<AngleIcon title={t("angle")} />}
                        placeholder={t("angle-from-x-to-z")}
                        value={linearVectorValues.theta}
                        onChange={(value) => {
                            setLinearVectorValues((prev) => ({
                                ...prev,
                                theta: value,
                            }));
                        }}
                    />
                </>
            ) : (
                <>
                    <InputNumber
                        addonBefore="x"
                        placeholder={t("x-component")}
                        value={componentVectorValues.x}
                        onChange={(value) => {
                            setComponentVectorValues((prev) => ({
                                ...prev,
                                x: value,
                            }));
                        }}
                    />
                    <InputNumber
                        addonBefore="y"
                        placeholder={t("y-component")}
                        value={componentVectorValues.y}
                        onChange={(value) => {
                            setComponentVectorValues((prev) => ({
                                ...prev,
                                y: value,
                            }));
                        }}
                    />
                    <InputNumber
                        addonBefore="z"
                        placeholder={t("z-component")}
                        value={componentVectorValues.z}
                        onChange={(value) => {
                            setComponentVectorValues((prev) => ({
                                ...prev,
                                z: value,
                            }));
                        }}
                    />
                </>
            )}
            <Button
                icon={<PlusOutlined />}
                onClick={handleVectorCreation}
                block
                type="primary"
            />
        </div>
    );
}
