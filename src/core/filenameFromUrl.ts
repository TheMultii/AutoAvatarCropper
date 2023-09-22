export const filenameFromUrl = (url: string): string => {
    const urlParts = url.split("/");
    const filename = urlParts[urlParts.length - 1];

    const filenameParts = filename.split(/[?#]/);
    return filenameParts[0];
};
