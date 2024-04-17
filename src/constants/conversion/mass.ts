export const kilogramConversionValues = {
    kilogram: 1,
    gram: 1000,
    ton: 0.001,
    pound: 2.20462,
    ounce: 35.274,
};

export const gramConversionValues = {
    kilogram: 0.001,
    gram: 1,
    ton: 1e-6,
    pound: 0.00220462,
    ounce: 0.035274,
};

export const tonConversionValues = {
    kilogram: 1000,
    gram: 1e6,
    ton: 1,
    pound: 2204.62,
    ounce: 35274,
};

export const poundConversionValues = {
    kilogram: 0.453592,
    gram: 453.592,
    ton: 0.000453592,
    pound: 1,
    ounce: 16,
};

export const ounceConversionValues = {
    kilogram: 0.0283495,
    gram: 28.3495,
    ton: 2.835e-5,
    pound: 0.0625,
    ounce: 1,
};

export const massConversionValues = {
    kilogram: kilogramConversionValues,
    gram: gramConversionValues,
    ton: tonConversionValues,
    pound: poundConversionValues,
    ounce: ounceConversionValues,
};

export const massConversionUnits = [
    "kilogram",
    "gram",
    "ton",
    "pound",
    "ounce",
];

export type MassUnit = keyof typeof massConversionValues;
