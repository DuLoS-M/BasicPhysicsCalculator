export type ComponentVector = {
    x: number;
    y: number;
    z: number;
    type: "component";
};

export type LinearVector = {
    magnitude: number;
    theta: number; // angle  z-axis
    phi: number; // angle in the x-y plane from the x-axis
    type: "linear";
};

export type Vector = LinearVector | ComponentVector;

export type VectorType = "linear" | "component";

export type ComponentVelocity = {
    x: number;
    y: number;
};

export type LinearVelocity = {
    magnitude: number;
    angle: number;
};

export type ValueWithUnit = {
    value: number;
    unit: string;
};
