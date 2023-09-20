import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const sendAvatar = (avatar: File) => {
    const url: string | undefined = import.meta.env.VITE_API_ENDPOINT;
    if (!url) {
        throw new Error("API endpoint not found");
    }

    return axios.post(import.meta.env.VITE_API_ENDPOINT, avatar);
};

export const useSendAvatar = () => {
    return useMutation(sendAvatar);
};
