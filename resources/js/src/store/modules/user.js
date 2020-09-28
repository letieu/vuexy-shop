import user from '../../services/user'

let state = () => ({
    addresses : []
})

const getters = {

}

const mutations = {
    setAddresses(state, addresses) {
        state.addresses = addresses
    },
    addAddress(state, address) {
        if (state.addresses.length) state.addresses.push(address)
        else state.addresses = [address]
    },
    deleteAddress(state, id) {
        let index = state.address.findIndex(item => item.id == id)
    }
}

const actions = {
    async fetchAddresses({commit}) {
        let res = await user.addresses()
        commit('setAddresses', res.data.data)
        return res
    },
    async saveAddress({commit}, address) {
        let res = await user.saveAddress(address)
        commit('addAddress', res.data.data)

        return res
    },
    async deleteAddress({commit}, id) {
        let res = await user.deleteAddress(id)
        commit('deleteAddress', id)

        return res
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
