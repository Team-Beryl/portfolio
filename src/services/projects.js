import { apiClient } from "./config"

export const apiAddProjects = async() => {
    return apiClient.post("/projects", payload)
}

export const apiGetProjects = async() => {
    return apiClient.get("/projects")
}

export const apiUpdateProject = async() => {
    return apiClient.patch(`/projects/${id}`)
}

export const apiDeleteProjects = async() => {
    return apiClient.delete(`/projects/${id}`)
}