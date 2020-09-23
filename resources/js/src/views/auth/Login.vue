<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">

                    <div class="vx-row no-gutter justify-center items-center">

                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div>

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="p-8 login-tabs-container">

                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">Login</h4>
                                    <p>Welcome back, please login to your account.</p>
                                </div>

                                <div>
                                    <vs-input
                                        name="email"
                                        icon-no-border
                                        icon="icon icon-user"
                                        icon-pack="feather"
                                        label-placeholder="Email"
                                        v-model="email"
                                        class="w-full"/>

                                    <vs-alert :active="'email' in errors" color="danger" icon-pack="feather" icon="icon-info" v-if="'email' in errors">
                                        <span>{{ errors.email[0] }}</span>
                                    </vs-alert>

                                    <vs-input
                                        type="password"
                                        name="password"
                                        icon-no-border
                                        icon="icon icon-lock"
                                        icon-pack="feather"
                                        label-placeholder="Password"
                                        v-model="password"
                                        class="w-full mt-6"/>

                                    <vs-alert :active="'password' in errors" color="danger" icon-pack="feather" icon="icon-info" v-if="'password' in errors">
                                        <span>{{ errors.password[0] }}</span>
                                    </vs-alert>

                                    <div class="flex flex-wrap justify-between my-5">
                                        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me
                                        </vs-checkbox>
                                        <router-link to="">Forgot Password?</router-link>
                                    </div>
                                    <vs-button type="border">Register</vs-button>
                                    <vs-button class="float-right" @click="submit">Login</vs-button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            email: "",
            password: "",
            checkbox_remember_me: false,
            errors: {}
        }
    },
    methods: {
        ...mapActions('auth', ['login']),

        submit() {
            this.login({
                email: this.email,
                password: this.password
            }).then(res => {
                this.$router.push('/')
            }).catch(err => {
                this.errors = err.response.data.errors
                console.log(this.errors)
            })
        }
    }
}
</script>

<style lang="scss">
#page-login {
    .social-login-buttons {
        .bg-facebook {
            background-color: #1551b1
        }

        .bg-twitter {
            background-color: #00aaff
        }

        .bg-google {
            background-color: #4285F4
        }

        .bg-github {
            background-color: #333
        }
    }
}
</style>
