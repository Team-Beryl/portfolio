import { apiClient } from "./config"

export const apiAddVolunteering = async() => {
    return apiClient.post("/volunteering")
}

export const apiGetVolunteering = async() => {
    return apiClient.get("/volunteering")
}

export const apiUpdateVolunteering = async() => {
    return apiClient.patch(`/volunteering/${id}`)
}

export const apiDeleteVolunteering = async() => {
    return apiClient.delete(`/volunteering/${id}`)
}


