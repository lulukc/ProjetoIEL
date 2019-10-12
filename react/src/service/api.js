import axios from 'axios'

const api = axios.create({
    baseURL:' http://10.250.248.170:3003',
})

export default api
