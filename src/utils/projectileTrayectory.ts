import type { ComponentVelocity, ValueWithUnit } from "src/types";
import { EARTH_GRAVITY } from "src/constants/forces";
/*
---Projectile trayectory---
Variables to find (options):
Height (y)
H-max
Distance (x)
D-max?
Velocity (initial, and final)
Angle of the velocity
time
*/

function solveQuadratic(
    a: number,
    b: number,
    c: number
): { root1: number; root2: number; imaginary: boolean } {
    let discriminant = b * b - 4 * a * c;
    let root1, root2;

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        return { root1, root2, imaginary: false };
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        return { root1, root2, imaginary: false };
    }

    // if roots are not real
    else {
        let realPart = -b / (2 * a);
        let imagPart = Math.sqrt(-discriminant) / (2 * a);

        root1 = realPart + imagPart;
        root2 = realPart + imagPart;

        // result
        console.log(
            `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        );
        return { root1, root2, imaginary: false };
    }
}

function getVelocityComponents(
    velocity: number,
    angle: number
): ComponentVelocity {
    const xComponent = Math.cos(30) * velocity;
    const yComponent = Math.sin(30) * velocity;

    return { x: xComponent, y: yComponent };
}

function calculateHeight(
    time: number,
    initialVelocity: number,
    launchAngle: number,
    gravity: number = EARTH_GRAVITY
): ValueWithUnit {
    const { y: yVelocity } = getVelocityComponents(
        initialVelocity,
        launchAngle
    );
    const height = yVelocity * time - 0.5 * gravity * time ** 2;
    return { value: height, unit: "m" };
}

function calculateMaxHeight(
    initialVelocity: number,
    launchAngle: number,
    gravity: number = EARTH_GRAVITY
): ValueWithUnit {
    const { y: yVelocity } = getVelocityComponents(
        initialVelocity,
        launchAngle
    );
    const { root1: time1, root2: time2 } = solveQuadratic(
        yVelocity,
        0.5 * -gravity,
        0
    );

    const root1 = calculateHeight(time1, initialVelocity, launchAngle);
    const root2 = calculateHeight(time2, initialVelocity, launchAngle);

    if (root1.value > 0) {
        return root1;
    }
    return root2;
}

function calculateDistance(
    time: number,
    initialVelocity: number,
    launchAngle: number
) {
    const { x: xVelocity } = getVelocityComponents(
        initialVelocity,
        launchAngle
    );
    const distance = xVelocity * time;
    return { value: distance, unit: "m" };
}

function calculateTimeY(
    height: number,
    velocity: number,
    angle: number,
    gravity: number = EARTH_GRAVITY
): ValueWithUnit[] {
    let time;

    const { x: xVelocity, y: yVelocity } = getVelocityComponents(
        velocity,
        angle
    );

    const { root1: time1, root2: time2 } = solveQuadratic(
        yVelocity,
        0.5 * -gravity,
        height
    );

    time = [
        { value: time1, unit: "s" },
        { value: time2, unit: "s" },
    ];

    return time;
}

function calculateTimeX(
    distance: number,
    velocity: number,
    angle: number
): ValueWithUnit {
    let time;

    const { x: xVelocity, y: yVelocity } = getVelocityComponents(
        velocity,
        angle
    );

    time = distance / xVelocity;
    return { value: time, unit: "s" };
}

function calculateFinalVelocity(initialVelocity: number, time: number) {
    const finalVel = initialVelocity - EARTH_GRAVITY * time;
    return { value: finalVel, unit: "m/s" };
}

function calculateGravity(
    initialVelocity: number,
    time: number,
    finalVelocity: number
) {
    const gravity = (initialVelocity - finalVelocity) / time;
    return { value: gravity, unit: "m/s^2" };
}
