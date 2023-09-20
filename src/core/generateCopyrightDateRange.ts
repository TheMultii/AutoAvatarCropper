/**
 * Generates a copyright date range based on the initial year.
 * @param {number} initialYear - The initial year of the copyright.
 * @returns {string} - A formatted copyright date range.
 */
export const generateCopyrightDateRange = (initialYear: number): string => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Create the copyright string
    const copyrightString =
        initialYear === currentYear
            ? `${currentYear}`
            : `${initialYear} - ${currentYear}`;

    return copyrightString;
};
