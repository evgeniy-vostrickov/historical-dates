export const convertPeriodToString = (period: number, countDigits = 2) => period.toString().padStart(countDigits, '0')
