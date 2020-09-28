import category from "../../services/category";

const state = () => ({
    all: []
})

const mutations = {
    SET_CATEGORIES(state, category) {
        state.all = category
    },

    ADD_CATEGORY(state, category) {
        if (state.all.length) state.all.unshift(category)
        else state.all = [category]
    },

    UPDATE_CATEGORY(state, category) {
        let index = state.all.findIndex(item => item.id == category.id)
        Object.assign(state.all[index], category)
    },

    DELETE_CATEGORY(state, id) {
        let index = state.all.findIndex(item => item.id == id)
        state.all.splice(index, 1)
    }
}

const actions = {
    async fetchCategories({commit}) {
        let res = await category.getAllCount()
        commit('SET_CATEGORIES', res.data.data)

        return res.data.data
    },

    async create({commit}, params) {
        let res = await category.create(params)
        commit('ADD_CATEGORY', res.data.data)

        return res
    },

    async update({commit}, params) {
        let res = await category.update(params, params.id)
        commit('UPDATE_CATEGORY', res.data.data)

        return res
    },

    async remove({commit}, id) {
        let res = await category.delete(id)
        commit('DELETE_CATEGORY', id)

        return res
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

