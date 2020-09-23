import auth from "../../services/auth"

const state = () => ({
    authenticated: false,
    user: null
})

const mutations = {
    SET_USER(state, user) {
        state.user = user
    },

    SET_AUTHENTICATED(state, value) {
        state.authenticated = value
    }
}

const actions = {
    async login({commit}, userData) {
        let res = await auth.login(userData)
        commit('SET_USER', res.data)
        commit('SET_AUTHENTICATED', true)
        return res
    },
    logout({commit}) {
        auth.logout()
        commit('SET_USER', null)
        commit('SET_AUTHENTICATED', false)
    },
    async me({commit}) {
        let res = await auth.user()

        commit('SET_USER', res.data)
        commit('SET_AUTHENTICATED', true)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
