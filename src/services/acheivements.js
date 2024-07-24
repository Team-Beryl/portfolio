import { apiClient } from "./config"


export const apiAddAcheivement = async(payload) => {
    return apiClient.post("/acheivements", payload)
}

export const apiGetAcheivements = async() => {

return apiClient.get("/acheivements")
}
 
export const apiGetAcheivementsById = async (id)=> 
{
    return apiClient.get(`/achievements/${id}`);
};

export const apiUpdateAcheivement = async(id, payload) => {
    return apiClient.patch(`/acheivements/${id}`, payload)
}

export const apiDeleteAcheivement = async(id) => {
    return apiClient.delete(`/acheivements/${id}`)
}




