import { apiClient } from "./config"

export const apiAddExperiences = async() => {
    return apiClient.post("/experiences", payload)
}

export const apiGetExperiences = async () =>{
    return apiClient.get("/experiences")
}

export const apiUpdateExperience = async () => {
    return apiClient.patch(`/experiences/${id}`)
}

export const apiDeleteExperience = async() => {
    return apiClient.delete(`/experiences/${id}`)
}