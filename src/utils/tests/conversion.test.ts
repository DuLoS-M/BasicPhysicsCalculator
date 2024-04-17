import { convertLength } from "../conversion";
import { convertTime } from "../conversion";
import { convertMass } from "../conversion";
import { determineConversionType } from "../conversion";

describe("convertLength", () => {
    it("should convert length correctly", () => {
        // Test case 1: Convert 10 meters to feet
        const result1 = convertLength(10, "meter", "foot");
        expect(result1).toBeCloseTo(32.8084, 4);

        // Test case 2: Convert 5 kilometers to miles
        const result2 = convertLength(5, "kilometer", "mile");
        expect(result2).toBeCloseTo(3.10686, 4);

        // Test case 3: Convert 100 centimeters to inches
        const result3 = convertLength(100, "centimeter", "inch");
        expect(result3).toBeCloseTo(39.3701, 4);
    });
});

describe("convertMass", () => {
    it("should convert mass correctly", () => {
        // Test case 1: Convert 10 kilograms to pounds
        const result1 = convertMass(10, "kilogram", "pound");
        expect(result1).toBeCloseTo(22.0462, 4);

        // Test case 2: Convert 5 grams to ounces
        const result2 = convertMass(5, "gram", "ounce");
        expect(result2).toBeCloseTo(0.17637, 4);
    });
});

describe("convertTime", () => {
    it("should convert time correctly", () => {
        // Test case 1: Convert 10 seconds to minutes
        const result1 = convertTime(10, "second", "minute");
        expect(result1).toBeCloseTo(0.166667, 6);

        // Test case 2: Convert 5 hours to minutes
        const result2 = convertTime(5, "hour", "minute");
        expect(result2).toBeCloseTo(300, 0);
    });
});

describe("determineConversionType", () => {
    it("should determine conversion type correctly", () => {
        // Test case 1: Determine conversion type for length
        const result1 = determineConversionType("meter");
        expect(result1).toBe("length");

        // Test case 2: Determine conversion type for mass
        const result2 = determineConversionType("kilogram");
        expect(result2).toBe("mass");

        // Test case 3: Determine conversion type for time
        const result3 = determineConversionType("second");
        expect(result3).toBe("time");
    });
});
