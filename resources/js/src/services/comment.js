import axios from "../axios";

export default {
    async list(productId) {
        return await axios.get(`/api/products/${productId}/comments`)
    },

    async post(productId, params) {
        return await axios.post(`/api/products/${productId}/comments`, params)
    }
}
