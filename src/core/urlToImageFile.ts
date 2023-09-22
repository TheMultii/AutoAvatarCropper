import axios from "axios";
import { filenameFromUrl } from ".";

export const urlToImageFile = async (url: string): Promise<File> => {
    const response = await axios.get(url, {
        responseType: "blob",
    });

    const blob = new Blob([response.data]);
    return new File([blob], filenameFromUrl(url), {
        type: "image/png",
    });
};
