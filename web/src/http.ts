import axios from 'axios';
import {ACCESS_TOKEN_LABEL, URL_LABEL} from "./config";

const http = axios.create({
    baseURL: URL_LABEL, // Replace this with your base URL
    // Other default configurations can be added here if needed
});

// Add a request interceptor
http.interceptors.request.use(
    (config) => {
        // Get the token from localStorage
        const token = localStorage.getItem(ACCESS_TOKEN_LABEL);

        // If a token exists, add it to the headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    });

export default http;
