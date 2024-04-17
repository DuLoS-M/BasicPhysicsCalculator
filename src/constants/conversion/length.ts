export const meterConversionValues = {
    meter: 1,
    kilometer: 0.001,
    mile: 0.000621371,
    foot: 3.28084,
    centimeter: 100,
    inch: 39.3701,
    nauticalMile: 0.000539957,
    yard: 1.09361,
    millimeter: 1000,
    micrometer: 1000000,
    nanometer: 1000000000,
};

export const kilometerConversionValues = {
    meter: 1000,
    kilometer: 1,
    mile: 0.621371,
    foot: 3280.84,
    centimeter: 100000,
    inch: 39370.1,
    nauticalMile: 0.539957,
    yard: 1093.61,
    millimeter: 1000000,
    micrometer: 1000000000,
    nanometer: 1000000000000,
};

export const mileConversionValues = {
    meter: 1609.34,
    kilometer: 1.60934,
    mile: 1,
    foot: 5280,
    centimeter: 160934,
    inch: 63360,
    nauticalMile: 0.868976,
    yard: 1760,
    millimeter: 1609344,
    micrometer: 1609344000,
    nanometer: 1609344000000,
};

export const footConversionValues = {
    meter: 0.3048,
    kilometer: 0.0003048,
    mile: 0.000189394,
    foot: 1,
    centimeter: 30.48,
    inch: 12,
    nauticalMile: 0.000164579,
    yard: 0.333333,
    millimeter: 304.8,
    micrometer: 304800,
    nanometer: 304800000,
};

export const centimeterConversionValues = {
    meter: 0.01,
    kilometer: 0.00001,
    mile: 6.2137e-6,
    foot: 0.0328084,
    centimeter: 1,
    inch: 0.393701,
    nauticalMile: 5.3996e-6,
    yard: 0.0109361,
    millimeter: 10,
    micrometer: 10000,
    nanometer: 10000000,
};

export const inchConversionValues = {
    meter: 0.0254,
    kilometer: 2.54e-5,
    mile: 1.5783e-5,
    foot: 0.0833333,
    centimeter: 2.54,
    inch: 1,
    nauticalMile: 1.3715e-5,
    yard: 0.0277778,
    millimeter: 25.4,
    micrometer: 25400,
    nanometer: 25400000,
};

export const nauticalMileConversionValues = {
    meter: 1852,
    kilometer: 1.852,
    mile: 1.15078,
    foot: 6076.12,
    centimeter: 185200,
    inch: 72913.4,
    nauticalMile: 1,
    yard: 2025.37,
    millimeter: 1852000,
    micrometer: 1852000000,
    nanometer: 1852000000000,
};

export const yardConversionValues = {
    meter: 0.9144,
    kilometer: 0.0009144,
    mile: 0.000568182,
    foot: 3,
    centimeter: 91.44,
    inch: 36,
    nauticalMile: 0.000493737,
    yard: 1,
    millimeter: 914.4,
    micrometer: 914400,
    nanometer: 914400000,
};

export const millimeterConversionValues = {
    meter: 0.001,
    kilometer: 1e-6,
    mile: 6.2137e-7,
    foot: 0.00328084,
    centimeter: 0.1,
    inch: 0.0393701,
    nauticalMile: 5.3996e-7,
    yard: 0.00109361,
    millimeter: 1,
    micrometer: 1000,
    nanometer: 1000000,
};

export const micrometerConversionValues = {
    meter: 1e-6,
    kilometer: 1e-9,
    mile: 6.2137e-10,
    foot: 3.28084e-6,
    centimeter: 0.0001,
    inch: 3.93701e-5,
    nauticalMile: 5.3996e-10,
    yard: 1.09361e-6,
    millimeter: 0.001,
    micrometer: 1,
    nanometer: 1000,
};

export const nanometerConversionValues = {
    meter: 1e-9,
    kilometer: 1e-12,
    mile: 6.2137e-13,
    foot: 3.28084e-9,
    centimeter: 1e-7,
    inch: 3.93701e-8,
    nauticalMile: 5.3996e-13,
    yard: 1.09361e-9,
    millimeter: 1e-6,
    micrometer: 0.001,
    nanometer: 1,
};

export const lengthConversionValues = {
    meter: meterConversionValues,
    kilometer: kilometerConversionValues,
    mile: mileConversionValues,
    foot: footConversionValues,
    centimeter: centimeterConversionValues,
    inch: inchConversionValues,
    nauticalMile: nauticalMileConversionValues,
    yard: yardConversionValues,
    millimeter: millimeterConversionValues,
    micrometer: micrometerConversionValues,
    nanometer: nanometerConversionValues,
};

export const lengthConversionUnits = [
    "meter",
    "kilometer",
    "mile",
    "foot",
    "centimeter",
    "inch",
    "nauticalMile",
    "yard",
    "millimeter",
    "micrometer",
    "nanometer",
];

export type LengthUnit = keyof typeof lengthConversionValues;
