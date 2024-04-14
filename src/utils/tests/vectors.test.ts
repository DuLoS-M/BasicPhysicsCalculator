import { convertLinearToComponentForm, sumVectors } from "../vectors";

describe("convertLinearToComponentForm", () => {
    it("should convert linear vectors to component vectors correctly", () => {
        const vectors = [
            { phi: 0, theta: 0, magnitude: 5 },
            { phi: Math.PI / 4, theta: Math.PI / 2, magnitude: 10 },
            { phi: Math.PI / 2, theta: Math.PI, magnitude: 15 },
        ];

        const expected = [
            { x: 0, y: 0, z: 5 },
            { x: 7.07107, y: 7.07107, z: 0 },
            { x: 0, y: 0, z: -15 },
        ];

        const result = convertLinearToComponentForm(vectors);

        expect(result).toEqual(expected);
    });
});

describe("sumVectors", () => {
    it("should sum component vectors correctly", () => {
        const vectors = [
            { x: 2, y: 3, z: 4 },
            { x: -1, y: 5, z: 2 },
            { x: 0, y: -2, z: 1 },
        ];

        const expected = { x: 1, y: 6, z: 7 };

        const result = sumVectors(vectors);

        expect(result).toEqual(expected);
    });
});
