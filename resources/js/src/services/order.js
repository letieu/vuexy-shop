import axios from 'axios'

export default {
    createOrder(order) {
        return axios.post('/api/orders', order)
    },
    list() {
        return axios.get('/api/orders')
    }
}
