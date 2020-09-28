import order from '../../services/order'

const state = ()=> ({
    all: []
})

const mutations = {
    SET_ORDERS(state, orders) {
        state.all = orders
    }
}

const actions = {
    async createOrder({commit}, params) {
        let res = await order.createOrder(params)
    },
    async fetchOrders({commit}, params) {
        let res = await order.list()
        commit('SET_ORDERS', res.data.data.data)

        return  res
    }
}

export default {
    namespaced: true,
    mutations,
    state,
    actions
}
