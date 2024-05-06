import axios from 'axios';
import { API_TOKEN, BASE_API_URL, STORE_ID } from '@constant/env.ts';

const api = axios.create({
    withCredentials: true,
    baseURL: `${BASE_API_URL}/${STORE_ID}`,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
});

export default api;
