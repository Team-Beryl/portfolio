import { apiClient } from "./config"

export const apiGetUserProfile = async () => {
    return apiClient.get("/userprofile")
}

export const apiAddUserProfile = async(payload) => {
    return apiClient.post("/userprofile", payload)
}

export const apiUpdateUserProfile = async (id) => {
    return apiClient.patch(`/userprofile/${id}`)
}

export const apiDeleteUserProfile = async() => {
    return apiClient.delete(`/userprofile/${id}`)
}



