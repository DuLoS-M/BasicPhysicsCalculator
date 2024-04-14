export type ComponentVector = {
    x: number;
    y: number;
    z: number;
};

export type LinearVector = {
    magnitude: number;
    theta: number; // angle with the z-axis
    phi: number; // angle in the x-y plane from the x-axis
};

export type Vector = LinearVector | ComponentVector;
