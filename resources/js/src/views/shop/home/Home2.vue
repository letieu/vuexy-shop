<template>
    <div class="home">
        <hot-product></hot-product>

            <div id="demo-basic-card" class="mt-20">
                <div class="vx-row">
                    <div class="vx-col w-full sm:w-1/2 lg:w-1/4 mb-base" v-for="product in products" :key="product.id">
                        <vx-card>
                            <img :src="'/images/' + product.image" alt="content-img" class="responsive rounded-lg">
                            <div class="my-6">
                                <h5 class="mb-2">
                                    <router-link :to="'/product/' + product.id">
                                        {{ product.name }}
                                    </router-link>
                                </h5>
                                <p class="text-grey" style="display: inline-block; width: 180px; white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis;">
                                    {{ product.description }}</p>
                            </div>
                            <vs-divider></vs-divider>
                            <div class="flex justify-between flex-wrap">
                        <span>
                            <p class="text-xl">{{ product.price }}đ</p>
                        </span>
                        <span>
                            <vs-button color="primary" type="filled" icon-pack="feather" icon="icon-archive" @click="$store.dispatch('cart/addToCart', product)"> </vs-button>
                        </span>
                            </div>
                        </vx-card>
                    </div>

                    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
                </div>
            </div>
    </div>
</template>
<script>
import HotProduct from "./fashionComponents/HotProduct";
import InfiniteLoading from 'vue-infinite-loading';


export default {
    components: {
        HotProduct,
        InfiniteLoading
    },

    computed: {
        products() {
            return this.$store.state.product.all
        }
    },
    mounted() {
        this.$store.dispatch('product/fetchProducts', {page: 1})
    },
    methods: {
        infiniteHandler($state) {
            let filter = this.$store.state.product.filter
            let newFilter = {...filter}
            newFilter.page ++
            this.$store.dispatch('product/fetchProducts', newFilter)
            .then((res) => {
                // if () {
                //     $state.loaded();
                // } else {
                //     $state.complete();
                // }
                if (res.current_page >= res.last_page) $state.complete()
                $state.loaded()
            });
        },
    }
}
</script>

<style lang="scss">
#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }

    .chat-card-log {
        height: 360px;

        .chat-sent-msg {
            background-color: #f2f4f7 !important;
        }
    }

    .card-video {
        .video-js {
            height: 370px;
        }
    }
}
</style>
