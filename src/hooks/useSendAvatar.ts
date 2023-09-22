import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const sendAvatar = (avatar: File) => {
    const url: string | undefined = import.meta.env.VITE_API_ENDPOINT;
    if (!url) {
        throw new Error("API endpoint not found");
    }

    const form = new FormData();
    form.append("image", avatar);

    return axios.post(url, form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
    });
};

export const useSendAvatar = () => {
    return useMutation(sendAvatar);
};
