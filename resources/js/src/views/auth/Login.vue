
<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">

                    <div class="vx-row no-gutter justify-center items-center">

                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="p-8 login-tabs-container">

                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">Login</h4>
                                    <p>Chào mừng đến với V-shop</p>
                                </div>

                                <div>
                                    <vs-input
                                        v-if="registering"
                                        name="name"
                                        icon-no-border
                                        icon="icon icon-user"
                                        icon-pack="feather"
                                        label-placeholder="Tài khoản"
                                        v-model="name"
                                        class="w-full"/>

                                    <vs-alert :active="'name' in errors" color="danger" icon-pack="feather" icon="icon-info" v-if="'name' in errors">
                                        <span>{{ errors.name[0] }}</span>
                                    </vs-alert>

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
                                        label-placeholder="Mật khẩu"
                                        v-model="password"
                                        class="w-full mt-6"/>

                                    <vs-alert :active="'password' in errors" color="danger" icon-pack="feather" icon="icon-info" v-if="'password' in errors">
                                        <span>{{ errors.password[0] }}</span>
                                    </vs-alert>

                                    <vs-input
                                        v-if="registering"
                                        type="password"
                                        name="password"
                                        icon-no-border
                                        icon="icon icon-lock"
                                        icon-pack="feather"
                                        label-placeholder="Mật khẩu"
                                        v-model="password_confirmation"
                                        class="w-full mt-6"/>

                                   <template v-if="!registering">
                                       <div class="flex flex-wrap justify-between my-5">
                                           <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Ghi nhớ
                                           </vs-checkbox>

                                       </div>
                                       <vs-button type="border" @click="registering = true">Đăng ký</vs-button>
                                       <vs-button class="float-right" @click="submit">Đăng nhập </vs-button>
                                   </template>
                                    <template v-else>
                                        <vs-divider></vs-divider>
                                        <vs-button type="border" @click="registering = false">Quay lại</vs-button>
                                        <vs-button class="float-right" @click="registerSubmit">Đăng ký</vs-button>
                                    </template>

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
            name: "",
            password: "",
            checkbox_remember_me: false,
            errors: {},
            registering: false,
            password_confirmation: ""
        }
    },
    methods: {
        ...mapActions('auth', ['login', 'register']),

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
        },
        registerSubmit() {
            this.register({
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then( res => {
                alert('reg ok');
                this.registering = false
            }).catch( error => {
                this.errors = error.response.data.errors
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
