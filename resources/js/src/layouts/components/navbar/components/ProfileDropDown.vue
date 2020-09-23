<template>
    <div class="the-navbar__user-meta flex items-center">

        <div class="text-right leading-tight hidden sm:block" v-if="$store.state.auth.authenticated">
            <p class="font-semibold">{{ activeUserInfo.email }}</p>
            <small>Available</small>
        </div>

        <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

            <div class="con-img ml-3">
                <img key="onlineImg" src="/images/avatar-s-1.png" alt="user-img"
                     width="40" height="40" class="rounded-full shadow-md cursor-pointer block"/>
            </div>

            <vs-dropdown-menu class="vx-navbar-dropdown">
                <ul style="min-width: 9rem">

                    <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="$router.push('/pages/profile').catch(() => {})">
                        <feather-icon icon="UserIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2">Profile</span>
                    </li>

                    <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="$router.push('/apps/email').catch(() => {})">
                        <feather-icon icon="MailIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2">Inbox</span>
                    </li>

                    <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="$router.push('/apps/todo').catch(() => {})">
                        <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2">Tasks</span>
                    </li>

                    <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="$router.push('/apps/chat').catch(() => {})">
                        <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2">Chat</span>
                    </li>

                    <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})">
                        <feather-icon icon="HeartIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2">Wish List</span>
                    </li>

                    <vs-divider class="m-1"/>

                    <li
                        class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                        @click="logout">
                        <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"/>
                        <span class="ml-2" @click="logout">Logout</span>
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
