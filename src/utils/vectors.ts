import type { LinearVector, ComponentVector, Vector } from "src/types";

export function convertLinearToComponentForm(
    vector: LinearVector
): ComponentVector {
    return {
        x: Math.sin(vector.theta) * Math.cos(vector.phi) * vector.magnitude,
        y: Math.sin(vector.theta) * Math.sin(vector.phi) * vector.magnitude,
        z: Math.cos(vector.theta) * vector.magnitude,
        type: "component",
    };
}

export function normalizeVectors(vectors: Vector[]): ComponentVector[] {
    return vectors.map((vector) => {
        if (vector.type === "linear") {
            return convertLinearToComponentForm(vector);
        }
        return vector;
    });
}

export function sumVectors(vectors: ComponentVector[]): ComponentVector {
    return vectors.reduce(
        (accumulator, item) => ({
            x: accumulator.x + item.x,
            y: accumulator.y + item.y,
            z: accumulator.z + item.z,
            type: accumulator.type,
        }),
        { x: 0, y: 0, z: 0, type: "component" }
    );
}
