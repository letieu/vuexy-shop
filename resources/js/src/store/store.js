/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import auth from "./modules/auth";
import branch from "./modules/branch";
import category from "./modules/category";
import product from "./modules/product";
import cart from "./modules/cart";
import user from "./modules/user"
import order from "./modules/order"
import comment from "./modules/comment";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        category,
        branch,
        product,
        cart,
        user,
        order,
        comment
    },
    getters,
    mutations,
    state,
    actions,
    strict: process.env.NODE_ENV !== 'production'
})
