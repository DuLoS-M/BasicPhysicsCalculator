import React, { useEffect, useState } from "react";
import { Row, Col, Space, Flex, InputNumber, Select, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";
import { UnitSelect } from "src/components/UnitConversion/UnitSelect";
import { capitalizeFirst } from "src/utils/strings";
import { CopyOutlined, SwapOutlined, PlusOutlined } from "@ant-design/icons";
import AngleIcon from "src/assets/icons/angle";
import VectorInputs from "src/components/SumOfVectors/VectorInputs";
import VectorList from "src/components/SumOfVectors/VectorList";
const { Title, Text } = Typography;
import type { VectorType, Vector } from "src/types";

export default function SumOfVectors() {
    const { t } = useTranslation("SumOfVectors");
    const [vectors, setVectors] = useState([]);
    const [vectorType, setVectorType] = useState<VectorType>("linear");

    function handleTypeChange() {
        setVectorType(vectorType === "linear" ? "component" : "linear");
    }

    function addVector(vector: Vector) {
        setVectors([...vectors, vector]);
    }

    function removeVector(index: number) {
        setVectors(vectors.filter((_, i) => i !== index));
    }

    function updateVector(index: number, object: object, value: number) {
        const newVectors = [...vectors];
        newVectors[index] = value;
        setVectors(newVectors);
    }

    useEffect(() => {
        console.log(vectors);
    }, [vectors]);

    return (
        <Flex
            // justify="center"
            align="center"
            gap="middle"
            style={{ height: "100%" }}
            vertical
        >
            <Title>{t("sum-of-vectors")}</Title>
            <VectorInputs onVectorAdd={addVector} />
            <VectorList vectors={vectors} />
        </Flex>
    );
}
