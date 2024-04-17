export const secondConversionValues = {
    second: 1,
    minute: 1 / 60,
    hour: 1 / 3600,
    day: 1 / 86400,
    week: 1 / 604800,
    month: 1 / 2.628e6,
    year: 1 / 3.154e7,
};

export const minuteConversionValues = {
    minute: 1,
    second: 60,
    hour: 1 / 60,
    day: 1 / 1440,
    week: 1 / 10080,
    month: 1 / 43800,
    year: 1 / 525600,
};

export const hourConversionValues = {
    second: 3600,
    minute: 60,
    hour: 1,
    day: 1 / 24,
    week: 1 / 168,
    month: 1 / 730,
    year: 1 / 8760,
};

export const dayConversionValues = {
    second: 86400,
    minute: 1440,
    hour: 24,
    day: 1,
    week: 1 / 7,
    month: 1 / 30.417,
    year: 1 / 365,
};

export const weekConversionValues = {
    second: 604800,
    minute: 10080,
    hour: 168,
    day: 7,
    week: 1,
    month: 1 / 4.345,
    year: 1 / 52.143,
};

export const monthConversionValues = {
    second: 2.628e6,
    minute: 43800,
    hour: 730,
    day: 30.417,
    week: 4.345,
    month: 1,
    year: 1 / 12,
};

export const yearConversionValues = {
    second: 3.154e7,
    minute: 525600,
    hour: 8760,
    day: 365,
    week: 52.143,
    month: 12,
    year: 1,
};

export const timeConversionValues = {
    second: secondConversionValues,
    minute: minuteConversionValues,
    hour: hourConversionValues,
    day: dayConversionValues,
    week: weekConversionValues,
    month: monthConversionValues,
    year: yearConversionValues,
};

export const timeConversionUnits = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
];

export type TimeUnit = keyof typeof timeConversionValues;
