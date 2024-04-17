import React, { useEffect, useState } from "react";
import {
    convertUnit,
    determineIfCompatible,
    determineConversionType,
} from "../utils/conversion";
import { convertMass } from "../utils/conversion";
import { convertTime } from "../utils/conversion";
import { Row, Col, Space, Flex, InputNumber, Select, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";
import { UnitSelect } from "src/components/UnitConversion/UnitSelect";
import { capitalizeFirst } from "src/utils/strings";

const { Title, Text } = Typography;

export const UnitConversion: React.FC = () => {
    const [fromUnit, setFromUnit] = useState(null);
    const [toUnit, setToUnit] = useState(null);
    const [value, setValue] = useState(0);
    const [convertedValue, setConvertedValue] = useState(0);
    const conversionType = determineConversionType(fromUnit);
    const UnitSelectComponent = (
        <UnitSelect value={fromUnit} onChange={setFromUnit} />
    );
    const UnitConvertedSelectComponent = (
        <UnitSelect
            type={conversionType}
            value={toUnit}
            onChange={setToUnit}
            disabled={false}
        />
    );
    const { t } = useTranslation("UnitConversion");

    const isCompatibleConversion = determineIfCompatible(fromUnit, toUnit);

    useEffect(() => {
        if (isCompatibleConversion) {
            const convertedValue = convertUnit(
                conversionType,
                value,
                fromUnit,
                toUnit
            );
            setConvertedValue(convertedValue);
        }
    }, [value, fromUnit, toUnit]);

    return (
        <>
            <Flex
                vertical
                justify="center"
                align="center"
                style={{ height: "100%" }}
            >
                <Title>{t("unit-conversion")}</Title>
                <Flex align="center" gap="small">
                    <h2
                        className={`text-3xl font-bold text-right ${
                            isCompatibleConversion
                                ? "text-blue-700"
                                : "text-red-700"
                        }`}
                    >
                        {fromUnit ? capitalizeFirst(t(fromUnit)) : "--"}
                    </h2>
                    <div className="text-xl font-semibold">{t("to")}</div>
                    <h2
                        className={`text-3xl  font-bold text-left ${
                            isCompatibleConversion
                                ? "text-blue-700"
                                : "text-red-700"
                        }`}
                    >
                        {toUnit ? capitalizeFirst(t(toUnit)) : "--"}
                    </h2>
                </Flex>
                <Flex gap="middle" vertical>
                    <InputNumber
                        value={value}
                        onChange={(value) => setValue(value)}
                        status={isCompatibleConversion ? "" : "error"}
                        min={0}
                        addonAfter={UnitSelectComponent}
                    />
                    <InputNumber
                        disabled
                        value={convertedValue}
                        status={isCompatibleConversion ? "" : "error"}
                        min={0}
                        addonAfter={UnitConvertedSelectComponent}
                    />
                </Flex>
                {/* <Button
                    disabled={!isCompatibleConversion}
                    type="primary"
                    size="large"
                    className="mt-4"
                >
                    {t("convert")}
                </Button> */}
            </Flex>
        </>
    );
};
