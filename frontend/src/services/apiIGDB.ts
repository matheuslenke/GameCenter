import axios from 'axios';

const apiIGDB = axios.create({
    baseURL: 'https://api.igdb.com/v4',
    headers: {
        'Client-Id': '70u2ib0ndnbmao4z6njvu85vaki5t1',
        'Authorization': 'Bearer 3d11fj389tdiudml5iko54bdw7y9ga',
        'Content-Type': 'text/plain'
    }
})

const imageCoverUrl =  'https://images.igdb.com/igdb/image/upload/t_cover_big/'

export { apiIGDB, imageCoverUrl }