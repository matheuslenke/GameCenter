import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.221:8080/',
})

export { api }