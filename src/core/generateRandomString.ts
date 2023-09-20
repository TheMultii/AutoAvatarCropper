/**
 * Generates a random string of the specified length.
 * @param {number} length - The length of the random string to generate.
 * @returns {string} - A random string of the specified length.
 */
export const generateRandomString = (length: number): string => {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    while (length--) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }

    return result;
};
