import axios from "../axios";

export default {
    async getAllCount() {
        return await axios.get('/api/branches')
    },

    async create(params) {
        return await axios.post('/api/branches', params)
    },

    async update(params, id) {
        return await axios.put('/api/branches/' + id, params )
    },

    async delete(id) {
        return await axios.delete('/api/branches/' + id)
    }
}
