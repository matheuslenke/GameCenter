import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.igdb.com/v4',
})

const imageCoverUrl =  'https://images.igdb.com/igdb/image/upload/t_cover_big/'

export { api, imageCoverUrl }