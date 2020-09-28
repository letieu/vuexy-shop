import axios from "../axios";

export default {
    async addresses() {
        return await axios.get('/api/address');
    },
    async saveAddress(address) {
        return await axios.post('/api/address', address)
    },
    async deleteAddress(id) {
        return await axios.delete('/api/address/' + id)
    }
}
