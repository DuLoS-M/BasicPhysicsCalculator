import type { LinearVector, ComponentVector, Vector } from "src/types";

export function convertLinearToComponentForm(
    vector: LinearVector
): ComponentVector {
    const thetaInRadians = vector.theta * (Math.PI / 180);
    const phiInRadians = vector.phi * (Math.PI / 180);

    // console.log({
    //     x: Number(
    //         (
    //             vector.magnitude *
    //             Math.sin(thetaInRadians) *
    //             Math.cos(phiInRadians)
    //         ).toFixed(5)
    //     ),
    //     y: Number(
    //         (
    //             vector.magnitude *
    //             Math.sin(thetaInRadians) *
    //             Math.sin(phiInRadians)
    //         ).toFixed(5)
    //     ),
    //     z: Number((vector.magnitude * Math.cos(thetaInRadians)).toFixed(5)),
    //     type: "component",
    // });

    return {
        x: Number(
            (
                vector.magnitude *
                Math.sin(thetaInRadians) *
                Math.cos(phiInRadians)
            ).toFixed(5)
        ),
        y: Number(
            (
                vector.magnitude *
                Math.sin(thetaInRadians) *
                Math.sin(phiInRadians)
            ).toFixed(5)
        ),
        z: Number((vector.magnitude * Math.cos(thetaInRadians)).toFixed(5)),
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
            x: Number((accumulator.x + item.x).toFixed(6)),
            y: Number((accumulator.y + item.y).toFixed(6)),
            z: Number((accumulator.z + item.z).toFixed(6)),
            type: accumulator.type,
        }),
        { x: 0, y: 0, z: 0, type: "component" }
    );
}
