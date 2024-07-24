import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create(
    {
        baseURL: baseUrl, 
      
    });

export const getToken = () => localStorage.getItem("accessToken");

export const clearToken = () => localStorage.removeItem("accessToken");

apiClient.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response)=> {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            clearToken();
            window.location.replace("/signin");
        }

        if (error.response.status === 404) 
        {toast.error("Not found");}
        return Promise.reject(error);
    }
);

