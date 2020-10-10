<template>
    <div class="vx-row">
        <side-bar class="vx-col md:w-2/12"></side-bar>
        <div class="vx-col md:w-10/12">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>

import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import SideBar from "./components/SideBar";
export default {
    data() {
        return {
            active: 'home'
        }
    },

    components: {
        SideBar,
        VuePerfectScrollbar
    },
    created() {

    },

    mounted() {
        this.$store.dispatch('category/fetchCategories')
        this.$store.dispatch('branch/fetchBranches')
        this.$store.dispatch('auth/me').then(res => {
            if (this.$store.state.auth.user == null || this.$store.state.auth.user.email != 'admin@shop.com' ) {
                this.$router.push('/')
            }
        }).catch(error => {
            this.$router.push('/')
        })
    }
}

</script>

