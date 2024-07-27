import { apiClient } from "./config";

export const apiGetUserDetails = async (username) => {
  const userData= await apiClient.get(`/auth/${username}`);
  return userData.data
}