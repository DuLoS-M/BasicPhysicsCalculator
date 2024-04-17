import { massConversionValues } from "../constants/conversion/mass";
import type { MassUnit } from "../constants/conversion/mass";
import { timeConversionValues } from "../constants/conversion/time";
import type { TimeUnit } from "../constants/conversion/time";
import { lengthConversionValues } from "../constants/conversion/length";
import type { LengthUnit } from "../constants/conversion/length";

export function convertLength(
    value: number,
    fromUnit: LengthUnit,
    toUnit: LengthUnit
): number {
    const convertionRate = lengthConversionValues[fromUnit][toUnit];
    if (convertionRate === undefined) {
        throw new Error(
            `Conversion from ${fromUnit} to ${toUnit} not supported`
        );
    }
    return convertionRate * value;
}

export function convertMass(
    value: number,
    fromUnit: MassUnit,
    toUnit: MassUnit
): number {
    const conversionRate = massConversionValues[fromUnit][toUnit];
    if (conversionRate === undefined) {
        throw new Error(`Unsupported conversion from ${fromUnit} to ${toUnit}`);
    }
    return value * conversionRate;
}

export function convertTime(
    value: number,
    fromUnit: TimeUnit,
    toUnit: TimeUnit
): number {
    const conversionRate = timeConversionValues[fromUnit][toUnit];
    if (conversionRate === undefined) {
        throw new Error(`Unsupported conversion from ${fromUnit} to ${toUnit}`);
    }
    return value * conversionRate;
}

export function determineConversionType(
    type: LengthUnit | MassUnit | TimeUnit
): "length" | "mass" | "time" {
    if (type in lengthConversionValues) {
        return "length";
    }
    if (type in massConversionValues) {
        return "mass";
    }
    if (type in timeConversionValues) {
        return "time";
    }
}

export function determineIfCompatible(
    fromType: LengthUnit | MassUnit | TimeUnit,
    toType: LengthUnit | MassUnit | TimeUnit
) {
    return (
        determineConversionType(fromType) === determineConversionType(toType)
    );
}

export function convertUnit(
    conversionType: "length" | "mass" | "time",
    value: number,
    fromUnit: LengthUnit | MassUnit | TimeUnit | null,
    toUnit: LengthUnit | MassUnit | TimeUnit | null
): number {
    switch (conversionType) {
        case "length":
            return convertLength(
                value,
                fromUnit as LengthUnit,
                toUnit as LengthUnit
            );
        case "mass":
            return convertMass(value, fromUnit as MassUnit, toUnit as MassUnit);
        case "time":
            return convertTime(value, fromUnit as TimeUnit, toUnit as TimeUnit);
        default:
            return value;
    }
}
