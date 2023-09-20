import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const getAvatar = () => {
    const url: string | undefined = import.meta.env.VITE_API_ENDPOINT;
    if (!url) {
        throw new Error("API endpoint not found");
    }

    return axios.get(import.meta.env.VITE_API_ENDPOINT);
};

export const useGetAvatar = () => {
    return useMutation(getAvatar);
};
