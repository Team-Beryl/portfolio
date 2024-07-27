import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create(
    {
        baseURL: baseUrl, 
      
    });

export const getDetails =  () => {
    const user = {};

    user.token = localStorage.getItem("accessToken");
    user.firstName = localStorage.getItem("firstName");
    user.lastName = localStorage.getItem("lastName");
    user.userName = localStorage.getItem("userName");

    return user;
};

export const clearDetails = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("fistName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("userName");
};

apiClient.interceptors.request.use(
    (config) => {
        const {token} = getDetails();
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
            clearDetails();
            window.location.replace("/signin");
        }

        if (error.response.status === 404) 
        {
            toast.error("Not found");
        }

        return Promise.reject(error);
    }
);

