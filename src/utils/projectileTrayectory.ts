import type {
    ComponentVelocity,
    ValueWithUnit,
    LinearVelocity,
} from "src/types";
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
    const ANGLE_IN_RADIANS = angle * (Math.PI / 180);

    const xComponent = Math.cos(ANGLE_IN_RADIANS) * velocity;
    const yComponent = Math.sin(ANGLE_IN_RADIANS) * velocity;

    return { x: xComponent, y: yComponent };
}

function calculateHeight(
    time: number,
    initialVelocity: number,
    launchAngle: number,
    initialHeight: number = 0,
    gravity: number = EARTH_GRAVITY
): ValueWithUnit {
    const { y: yVelocity } = getVelocityComponents(
        initialVelocity,
        launchAngle
    );
    const height = initialHeight + yVelocity * time - 0.5 * gravity * time ** 2;
    return { value: height, unit: "m" };
}

function calculateHeightFromMaxHeightAndTime(
    maxHeight: number,
    timeToMaxHeight: number,
    time: number,
    gravity: number = EARTH_GRAVITY
): ValueWithUnit {
    const height = maxHeight - 0.5 * gravity * (time - timeToMaxHeight) ** 2;
    return { value: height, unit: "m" };
}

function calculateMaxHeightFromTimeToMaxHeight(
    timeToMaxHeight: number,
    gravity: number = EARTH_GRAVITY
): ValueWithUnit {
    const maxHeight = 0.5 * gravity * timeToMaxHeight ** 2;
    return { value: maxHeight, unit: "m" };
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
    console.log({ initialVelocity, launchAngle, gravity });
    const maxHeight = yVelocity ** 2 / (2 * gravity);
    console.log(maxHeight);
    return { value: maxHeight, unit: "m" };
}

function calculateDistance(
    initialVelocity: number,
    launchAngle: number,
    time: number
) {
    const { x: xVelocity } = getVelocityComponents(
        initialVelocity,
        launchAngle
    );
    const range = xVelocity * time;
    return { value: range, unit: "m" };
}

function calculateDistanceFromTimeAndVelocity(
    time: number,
    InitialVelocity: number,
    launchAngle: number
): ValueWithUnit {
    const { x: xVelocity, y: yVelocity } = getVelocityComponents(
        InitialVelocity,
        launchAngle
    );

    const distance = time * xVelocity;
    return { value: distance, unit: "m" };
}

function calculateTimeFromHeightAndVelocity(
    height: number,
    initialVelocity: number,
    launchAngle: number,
    gravity: number = EARTH_GRAVITY
): ValueWithUnit[] {
    let time;

    const { x: xVelocity, y: yVelocity } = getVelocityComponents(
        initialVelocity,
        launchAngle
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

function calculateTimeFromDistanceAndVelocity(
    distance: number,
    initialVelocity: number,
    launchAngle: number
): ValueWithUnit {
    let time;

    const { x: xVelocity, y: yVelocity } = getVelocityComponents(
        initialVelocity,
        launchAngle
    );

    time = distance / xVelocity;
    return { value: time, unit: "s" };
}

function calculateTimeFromFinalVelocityAndGravity(
    finalVelocity: number,
    initialVelocity: number,
    gravity: number = EARTH_GRAVITY
): ValueWithUnit {
    const time = (finalVelocity - initialVelocity) / gravity;
    return { value: time, unit: "s" };
}

function calculateVelocity(
    initialVelocity: number,
    launchAngle: number,
    time: number,
    gravity: number = EARTH_GRAVITY
): LinearVelocity {
    const { x: xVelocity, y: yInitialVelocity } = getVelocityComponents(
        initialVelocity,
        launchAngle
    );
    const yVelocity = yInitialVelocity - gravity * time;
    const magnitude = Math.sqrt(xVelocity ** 2 + yVelocity ** 2);
    const direction = Math.atan2(yVelocity, xVelocity) * (180 / Math.PI);
    return { magnitude, angle: direction };
}

function calculateVelocityFromDisplacementAndTime(
    displacement: number,
    time: number
): LinearVelocity {
    const velocity = displacement / time;
    const magnitude = Math.abs(velocity);
    const direction = velocity >= 0 ? 0 : 180;
    return { magnitude, angle: direction };
}

function calculateInitialVelocity(
    finalVelocity: number,
    gravity: number,
    time: number
): ValueWithUnit {
    const initialVelocity = finalVelocity - gravity * time;
    return { value: initialVelocity, unit: "m/s" };
}

function calculateGravity(
    initialVelocity: number,
    time: number,
    finalVelocity: number
) {
    const gravity = (initialVelocity - finalVelocity) / time;
    return { value: gravity, unit: "m/s^2" };
}

function calculateGravityFromHeightAndTime(
    height: number,
    time: number
): ValueWithUnit {
    const gravity = (2 * height) / time ** 2;
    return { value: gravity, unit: "m/s^2" };
}

function calculateVelocityAngle(
    xVelocity: number,
    yVelocity: number
): ValueWithUnit {
    const angleInRadians = Math.atan2(yVelocity, xVelocity);
    const angleInDegrees = angleInRadians * (180 / Math.PI);
    return { value: angleInDegrees, unit: "degrees" };
}

export {
    calculateHeight,
    calculateHeightFromMaxHeightAndTime,
    calculateMaxHeightFromTimeToMaxHeight,
    calculateMaxHeight,
    calculateDistance,
    calculateDistanceFromTimeAndVelocity,
    calculateTimeFromHeightAndVelocity,
    calculateTimeFromDistanceAndVelocity,
    calculateTimeFromFinalVelocityAndGravity,
    calculateVelocity,
    calculateVelocityFromDisplacementAndTime,
    calculateInitialVelocity,
    calculateGravity,
    calculateGravityFromHeightAndTime,
    calculateVelocityAngle,
};
