import { apiClient, clearDetails } from "./config";

export const apiSignUp = async(payload) => {
    return apiClient.post("/auth/signup", payload);
};

export const apiLogin = async(payload) => {
    return apiClient.post("/auth/token/login", payload)
};

export const apiSignOut = async () => {
    clearDetails();
};


export const apiCheckUsernameExist = async(userName) => {
    return apiClient.get(`/auth/${userName}`)
};

