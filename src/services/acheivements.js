import { apiClient } from "./config"


export const apiGetAcheivements = async() => {

return apiClient.get("/acheivements")
}