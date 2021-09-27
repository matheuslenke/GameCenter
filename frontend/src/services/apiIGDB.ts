import axios from 'axios';

const apiIGDB = axios.create({
    baseURL: process.env.IGDB_API_URL,
    headers: {
        'Client-Id': '70u2ib0ndnbmao4z6njvu85vaki5t1',
        'Authorization': 'Bearer 3d11fj389tdiudml5iko54bdw7y9ga',
        'Content-Type': 'text/plain'
    }
})

const imageCoverUrl =  process.env.IGDB_API_COVER_URL

export { apiIGDB, imageCoverUrl }