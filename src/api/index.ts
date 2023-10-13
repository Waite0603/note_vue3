import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    response => {
        if (response.data.code === 20000) {
            return response.data.data;
        }
    },
    error => {
        return Promise.reject(error);
    }
);

export default axios;