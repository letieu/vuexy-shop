<template>
    <vs-list class="vx-card">
        <router-link to="/dashboard/product">
            <vs-list-item icon-pack="feather" icon="icon-archive" title="Products"></vs-list-item>
        </router-link>
        <router-link to="/dashboard/category">
            <vs-list-item icon-pack="feather" icon="icon-bookmark" title="Categories"></vs-list-item>
        </router-link>

        <router-link to="/dashboard/branch">
            <vs-list-item icon-pack="feather" icon="icon-flag" title="Branches"></vs-list-item>
        </router-link>

        <router-link to="/dashboard/order">
            <vs-list-item icon-pack="feather" icon="icon-truck" title="Orders"></vs-list-item>
        </router-link>
    </vs-list>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
.router-link-exact-active.router-link-active{
    display: block;
    color: #7ec699;
}
</style>
