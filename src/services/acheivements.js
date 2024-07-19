import { apiClient } from "./config"


export const apiAddAcheivement = async(payload) => {
    return apiClient.post("/acheivements", payload)
}

export const apiGetAcheivements = async() => {

return apiClient.get("/acheivements")
}



export const apiUpdateAcheivement = async() => {
    return apiClient.patch(`/acheivements/${id}`)
}

export const apiDeleteAcheivement = async() => {
    return apiClient.delete(`/acheivements/${id}`)
}




