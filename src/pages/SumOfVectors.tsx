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
import type { VectorType, Vector } from "src/types";
import { normalizeVectors, sumVectors } from "src/utils/vectors";
import VectorRender from "src/components/SumOfVectors/VectorRender";
const { Title, Text } = Typography;

export default function SumOfVectors() {
    const { t } = useTranslation("SumOfVectors");
    const [vectors, setVectors] = useState([]);
    const [vectorType, setVectorType] = useState<VectorType>("linear");
    const resultingVector = sumVectors(normalizeVectors(vectors));

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

    // useEffect(() => {
    //     console.log(vectors);
    // }, [vectors]);

    return (
        <div className="flex flex-col justify-start h-full w-full items-center overflow-hidden">
            <Title>{t("sum-of-vectors")}</Title>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-8 mx-4 flex-wrap">
                <div>
                    <VectorInputs onVectorAdd={addVector} />
                    <div>Resulting vector:</div>
                    <div>{`X:${resultingVector.x} | Y:${resultingVector.y} | Z:${resultingVector.z}`}</div>
                    <VectorRender
                        vectors={vectors}
                        resultingVector={resultingVector}
                    />
                </div>
                <VectorList vectors={vectors} onDelete={removeVector} />
            </div>
        </div>
    );
}
