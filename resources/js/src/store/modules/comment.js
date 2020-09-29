import comment from "../../services/comment";

const state = () => ({
    all: []
})

const mutations = {
    SET_COMMENTS(state, comments) {
        state.all = comments
    },
    ADD_COMMENT(state, comment) {
        state.all.push(comment)
    }
}

const actions = {
    async fetchComments({commit}, productId) {
        let res = await comment.list(productId)
        commit('SET_COMMENTS', res.data.data.data)

        return res
    },

    async postComment({commit}, {productId, text}) {
        console.log(text)
        let res = await comment.post(productId, {text})
        commit('ADD_COMMENT', res.data.data)

        return res
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}

