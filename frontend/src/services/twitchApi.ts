import axios from 'axios';

const twitchApi = axios.create({
    baseURL: 'https://api.twitch.tv/',
    headers: {
        'Client-Id': process.env.TWITCH_CLIENTID
    }
})

const twitchClientId = process.env.TWITCH_CLIENTID

export { twitchApi, twitchClientId }