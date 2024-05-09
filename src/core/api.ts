import axios from 'axios';
import { API_TOKEN, API_URL, STORE_ID } from '@constant/env';
import router from '@router/index.ts';

const api = axios.create({
    baseURL: `${API_URL}/${STORE_ID}`,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
});

api.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        router.push(`/${error.response.status}`).then();

        return Promise.reject(error.response);
    }
);

export default api;
