import product from '../../services/product.js'

let state = () => ({
    item_quantity: [],
    items: []
})

const getters = {
    products(state) {
        return state.items
    },
    quantities(state) {
        return state.item_quantity;
    },
    total(state) {
        let total = 0;
        console.log(state.item_quantity)
        for (let i=0; i < state.item_quantity.length; i++) {
           total += state.item_quantity[i].quantity * state.items[i].price
        }

        return total
    },
    count(state) {
        return state.items.length
    },

    itemById(state, id) {
        return state.items.find(item => item.id === id)
    },
    isInCart: state => itemId => {
        return state.all.some((item) => item.id === itemId )
    },
}

const mutations = {
    SET_ITEMS(state, [products, item_quantity]) {
        state.items = products
        state.item_quantity = item_quantity
    },
    ADD_ITEM(state, product) {
        if (!state.items.length) {
            state.items = [product]
            state.item_quantity = [{id: product.id, quantity: 1}]
            return
        }
        let index = state.items.findIndex(item => item.id === product.id)
        if (index < 0) {
            state.items.push(product)
            state.item_quantity.push({id: product.id, quantity: 1})
        } else {
            state.item_quantity[index].quantity ++
        }
    },
    DELETE_ITEM(state, id) {
        let index = state.items.findIndex(item => item.id === id)
        state.items.splice(index, 1)
        state.item_quantity.splice(index, 1)
    },
    INCREMENT_ITEM(state, id) {
        let index = state.items.findIndex(item => item.id === id)
        state.item_quantity[index].quantity ++
    },
    DECREMENT_ITEM(state, id) {
        let index = state.items.findIndex(item => item.id === id)
        state.item_quantity[index].quantity --
    },

    SYNC_DATA(state) {
        let cart = {
            itemQuantity: state.item_quantity,
            itemId: state.items.map(item => item.id)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
    },

    CLEAR(state) {
        state.items = []
        state.item_quantity = []
    }
}

const actions = {
    async init({commit}) {
        let cart = localStorage.getItem('cart')
        cart = JSON.parse(cart)
        let itemsQuantity = cart.itemQuantity
        let itemsId = cart.itemId
        let items = await product.getItems(itemsId)

        commit('SET_ITEMS', [items.data.data, itemsQuantity])
    },

    async addToCart({commit, state}, product) {
        let index = state.items.findIndex(item => item.id === product.id)

        if (index >= 0) {
            commit('INCREMENT_ITEM', product.id)
            commit('SYNC_DATA')

            return product
        }
        commit('ADD_ITEM', product)
        commit('SYNC_DATA')

        return product
    },

    deleteFromCart({commit}, id) {
        commit('DELETE_ITEM', id)
        commit('SYNC_DATA')
    },

    decrementItemCart({commit}, id) {
        commit('DECREMENT_ITEM', id)
        commit('SYNC_DATA')
    },

    incrementItemCart({commit}, id) {
        commit('INCREMENT_ITEM', id)
        commit('SYNC_DATA')
    },

    clear({commit}) {
        commit('CLEAR')
        localStorage.setItem('cart', '');
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
