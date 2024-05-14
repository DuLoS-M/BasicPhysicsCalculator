import { ComponentVector, LinearVector } from "src/types";
import { convertLinearToComponentForm, sumVectors } from "../vectors";

describe("convertLinearToComponentForm", () => {
    it("should convert linear vectors to component vectors correctly", () => {
        const vectors: LinearVector[] = [
            { phi: 0, theta: 0, magnitude: 5, type: "linear" }, // Along positive z-axis
            {
                phi: 45,
                theta: 90,
                magnitude: 10,
                type: "linear", // In xy-plane making an angle of 45 degrees with x-axis
            },
            { phi: 0, theta: 180, magnitude: 15, type: "linear" }, // Along negative z-axis
        ];

        const expected = [
            { x: 0, y: 0, z: 5, type: "component" },
            { x: 7.07107, y: 7.07107, z: 0, type: "component" },
            { x: 0, y: 0, z: -15, type: "component" },
        ];

        const result = vectors.map((item) =>
            convertLinearToComponentForm(item)
        );

        expect(result).toEqual(expected);
    });
});
describe("sumVectors", () => {
    it("should sum component vectors correctly", () => {
        const vectors: ComponentVector[] = [
            { x: 2, y: 3, z: 4, type: "component" },
            { x: -1, y: 5, z: 2, type: "component" },
            { x: 0, y: -2, z: 1, type: "component" },
        ];

        const expected = { x: 1, y: 6, z: 7, type: "component" };

        const result = sumVectors(vectors);

        expect(result).toEqual(expected);
    });
});
