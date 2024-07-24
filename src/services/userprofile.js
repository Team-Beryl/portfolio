import { apiClient } from "./config";


export const apiAddUserProfile = async(payload) => {
    return apiClient.post("/userProfile", payload)
};

export const apiGetUserProfile = async () => {
    return apiClient.get("/userProfile")
};

export const apiGetUserProfileById = async(id)=> {
    return apiClient.get(`/userProfile/${id}`);
};

export const apiUpdateUserProfile = async (id, payload) => {
    return apiClient.patch(`/userProfile/${id}`, payload)
};

export const apiDeleteUserProfile = async() => {
    return apiClient.delete(`/userProfile/${id}`)
};



