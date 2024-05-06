import axios from 'axios';
import { API_TOKEN, API_URL, STORE_ID } from '@constant/env.ts';

const api = axios.create({
    baseURL: `${API_URL}/${STORE_ID}`,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
});

export default api;
