import type { LinearVector, ComponentVector } from "src/types";

export function convertLinearToComponentForm(
    vectors: LinearVector[]
): ComponentVector[] {
    let newVectors: ComponentVector[] = vectors.map((vector) => {
        let x =
            Math.sin(vector.theta) * Math.cos(vector.phi) * vector.magnitude;
        let y =
            Math.sin(vector.theta) * Math.sin(vector.phi) * vector.magnitude;
        let z = Math.cos(vector.theta) * vector.magnitude;

        return {
            x: +x.toFixed(5),
            y: +y.toFixed(5),
            z: +z.toFixed(5),
        };
    });

    return newVectors;
}

export function sumVectors(vectors: ComponentVector[]): ComponentVector {
    return vectors.reduce(
        (accumulator, item) => ({
            x: accumulator.x + item.x,
            y: accumulator.y + item.y,
            z: accumulator.z + item.z,
        }),
        { x: 0, y: 0, z: 0 }
    );
}
