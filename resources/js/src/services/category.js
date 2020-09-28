import axios from "../axios";

export default {
    async getAllCount() {
        return await axios.get('/api/categories')
    },

    async create(params) {
        return await axios.post('/api/categories', params)
    },

    async update(params, id) {
        return await axios.put('/api/categories/' + id, params )
    },

    async delete(id) {
        return await axios.delete('/api/categories/' + id)
    }
}
