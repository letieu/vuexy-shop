import axios from "../axios";

export default {
    async getAll(filter)
    {
        return await axios.get('/api/products', {
            params: filter
        })
    },

    async create(params)
    {
        return await axios.post('/api/products', params)
    },

    async update(params)
    {
        return await axios.put('/api/products/' + params.id, params)
    },

    async delete(id)
    {
        return await axios.delete('/api/products/' + id)
    },

    async get(id)
    {
        return await axios.get('api/products/' + id)
    },

    async getItems(ids)
    {
        return await axios.get('api/products/find', {
            params: {
                ids
            }
        })
    },

    async createComment(params, id)
    {
        return await axios.post(`api/products/${id}/comments`, params)
    },

    async getComments(id)
    {
        return await axios.get(`api/products/${id}/comments`)
    }
}
