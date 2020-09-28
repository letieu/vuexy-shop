import axios from "../axios";

export default {
    async login(user) {
        await axios.get('/sanctum/csrf-cookie')
        return await axios.post('api/login', user)

    },
    logout() {
        axios.post('/api/logout')
    },
    async user() {
        return await axios.get('/api/user')
    },
    async register(user) {
        return await axios.post('api/register', user)
    }
}
