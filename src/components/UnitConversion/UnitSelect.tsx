import React from "react";
import { Row, Col, Space, Flex, InputNumber, Select } from "antd";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";
import { massConversionUnits } from "src/constants/conversion/mass";
import { timeConversionUnits } from "src/constants/conversion/time";
import { lengthConversionUnits } from "src/constants/conversion/length";
import { capitalizeFirst } from "src/utils/strings";

const { Title, Text } = Typography;
const { Option, OptGroup } = Select;

type SelectProps = React.ComponentProps<typeof Select>;

type UnitSelectProps = {
    type?: "length" | "mass" | "time" | null;
} & SelectProps;

export const UnitSelect: React.FC<UnitSelectProps> = ({
    type = null,
    value,
    onChange,
}) => {
    const { t } = useTranslation("UnitConversion");
    const showLength = type === "length" || type === null;
    const showMass = type === "mass" || type === null;
    const showTime = type === "time" || type === null;
    return (
        <Select
            style={{ width: 80 }}
            showSearch
            value={value}
            onChange={onChange}
        >
            {showLength && (
                <OptGroup label={capitalizeFirst(t("length"))}>
                    {lengthConversionUnits.map((unit) => (
                        <Option
                            key={unit.value}
                            title={capitalizeFirst(t(unit.value))}
                            value={unit.value}
                        >
                            {unit.name}
                        </Option>
                    ))}
                </OptGroup>
            )}
            {showMass && (
                <OptGroup label={capitalizeFirst(t("mass"))}>
                    {massConversionUnits.map((unit) => (
                        <Option
                            key={unit.value}
                            title={capitalizeFirst(t(unit.value))}
                            value={unit.value}
                        >
                            {unit.name}
                        </Option>
                    ))}
                </OptGroup>
            )}
            {showTime && (
                <OptGroup label={capitalizeFirst(t("time"))}>
                    {timeConversionUnits.map((unit) => (
                        <Option
                            key={unit.value}
                            title={capitalizeFirst(t(unit.value))}
                            value={unit.value}
                        >
                            {unit.name}
                        </Option>
                    ))}
                </OptGroup>
            )}
        </Select>
    );
};
