import product from "../../services/product";
import Vue from "vue";

let state = () => ({
    all: [],
    filter: {},
    comments: []
})

const mutations = {
    SET_PRODUCTS(state, products) {
        Vue.set(state, 'all', products)
    },
    ADD_PRODUCT(state, product) {
        if (state.all.length) state.all.unshift(product)
        else state.all = [product]
    },
    UPDATE_PRODUCT(state, product) {
        let index = state.all.findIndex(item => item.id == product.id)
        console.log(state.all[index])
        Object.assign(state.all[index], product);
        console.log(state.all[index])
    },
    DELETE_PRODUCT(state, id) {
        let index = state.all.findIndex(item => item.id == id)
        state.all.splice(index, 1)
    },
    SET_FILTERS(state, filter) {
        state.filter = filter
    },
    ADD_COMMENT(state, comment) {
        state.comments.push(comment)
    },
    SET_COMMENTS(state, comments)
    {
        state.comments = comments
    },
    PUSH_PRODUCTS(state, products) {
        state.all = state.all.concat(products)
    }
}

const getters = {
    list(state) {
        return state.all
    }
}

const actions = {
    async fetchProducts({commit}, params = {}) {
        if (! ('perPage' in params)) params.perPage = 12
        let res = await product.getAll(params)
        if (res.data.data.current_page == 1) {
            commit('SET_PRODUCTS', res.data.data.data)
            params.page = 1
        } else {
            commit('PUSH_PRODUCTS', res.data.data.data)
            params.page ++
        }

        commit('SET_FILTERS', params)

        return res.data.data
    },

    async detail({}, id) {
        return await product.get(id)
    },

    async createOrUpdate({commit}, params) {

        if (!params.id) {
            let res = await product.create(params)
            commit('ADD_PRODUCT', res.data.data)
        } else {
            let res = await product.update(params)
            commit('UPDATE_PRODUCT', res.data.data)
        }

        return res
    },

    async delete({commit}, id) {
        let res = await product.delete(id)
        commit('DELETE_PRODUCT', id)

        return res
    },

    async fetchComments({commit}, id) {
        let res = await product.getComments(id)
        commit('SET_COMMENTS', res.data.data)
        return res
    },

    async createComment({commit}, {comment, id}) {
        let res = await product.createComment(comment, id)
        commit('ADD_COMMENT', res.data.data)
        return res
    },

    async newProducts({commit}) {
        let res = await product.newProducts()
        return res
    }
}

export default {
    namespaced: true,
    mutations,
    getters,
    state,
    actions
}
