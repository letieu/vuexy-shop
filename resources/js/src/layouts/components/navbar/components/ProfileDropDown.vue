<template>
    <div class="the-navbar__user-meta flex items-center">

        <div class="text-right leading-tight hidden sm:block" v-if="$store.state.auth.authenticated">
            <p class="font-semibold">{{ activeUserInfo.email }}</p>
        </div>

        <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

            <div class="con-img ml-3">
                <img key="onlineImg" src="/images/avatar-s-1.png" alt="user-img"
                     width="40" height="40" class="rounded-full shadow-md cursor-pointer block"/>
            </div>

            <vs-dropdown-menu class="vx-navbar-dropdown">
                <ul style="min-width: 9rem">

                    <vs-divider class="m-1"/>

                    <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="logout">
                        <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2" @click="logout" v-if="activeUserInfo">Logout</span>
                        <span class="ml-2" @click="$router.push('/login')" v-else>Login</span>
                    </li>
                </ul>
            </vs-dropdown-menu>
        </vs-dropdown>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    data() {
        return {}
    },
    computed: {
        activeUserInfo() {
            console.log(this.$store.state.auth.user)
            return this.$store.state.auth.user
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout')
            this.$router.push('/login').catch(() => {
            })
        },
    }
}
</script>
