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
    }
}

</script>

