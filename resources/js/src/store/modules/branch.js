import branch from "../../services/branch";

const state = () => ({
    all: []
})

const mutations = {
    SET_BRANCHES(state, branch) {
        state.all = branch
    },

    ADD_BRANCH(state, branch) {
        if (state.all.length) state.all.unshift(branch)
        else state.all = [branch]
    },

    UPDATE_BRANCH(state, branch) {
        let index = state.all.findIndex(item => item.id == branch.id)
        Object.assign(state.all[index], branch)
    },

    DELETE_BRANCH(state, id) {
        let index = state.all.findIndex(item => item.id == id)
        state.all.splice(index, 1)
    }
}

const actions = {
    async fetchBranches({commit}) {
        let res = await branch.getAllCount()
        commit('SET_BRANCHES', res.data.data)

        return res.data.data
    },

    async create({commit}, params) {
        let res = await branch.create(params)
        commit('ADD_BRANCH', res.data.data)

        return res
    },

    async update({commit}, params) {
        let res = await branch.update(params, params.id)
        commit('UPDATE_BRANCH', res.data)

        return res
    },

    async remove({commit}, id) {
        let res = await branch.delete(id)
        commit('DELETE_BRANCH', id)

        return res
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}



