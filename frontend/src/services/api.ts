import axios from 'axios';

const api = axios.create({
    baseURL: process.env.GAMECENTER_API_URL || 'http://localhost:8080/',
})

export { api }