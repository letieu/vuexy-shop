<template>
    <div id="item-detail-page">

        <vs-alert color="danger" title="Error Fetching Product Data" :active.sync="error_occured">
            <span>{{ error_msg }}. </span>
            <span>
        <span>Check </span><router-link :to="{name:'ecommerce-shop'}" class="text-inherit underline">All Items</router-link>
      </span>
        </vs-alert>

        <vx-card v-if="item_data" :key="item_data.objectID">


            <template slot="no-body">

                <div class="item-content">

                    <!-- Item Main Info -->
                    <div class="product-details p-6">
                        <div class="vx-row mt-6">
                            <div class="vx-col md:w-2/5 w-full flex items-center justify-center">
                                <div class="product-img-container w-3/5 mx-auto mb-10 md:mb-0">
                                    <img :src="'/images/' + item_data.image" :alt="item_data.name" class="responsive">

                                    <!--
                                      UnComment Below line for true flow
                                      <img :src="item_data.image" :alt="item_data.name" class="responsive">

                                      Remove above img tag which is for demo purpose in actual flow
                                    -->
                                </div>
                            </div>

                            <!-- Item Content -->
                            <div class="vx-col md:w-3/5 w-full">

                                <h3>{{ item_data.name }}</h3>

                                <p class="my-2">
                                    <span class="mr-2">by</span>
                                    <span>{{ item_data.branch.name }}</span>
                                </p>
                                <p class="flex items-center flex-wrap">
                                    <span class="text-2xl leading-none font-medium text-primary mr-4 mt-2">${{ item_data.price }}</span>
                                    <span class="pl-4 mr-2 mt-2 border border-solid d-theme-border-grey-light border-t-0 border-b-0 border-r-0"><star-rating :show-rating="false" :rating="item_data.rating" :star-size="20" read-only /></span>
                                    <span class="cursor-pointer leading-none mt-2">424 ratings</span>
                                </p>

                                <vs-divider />

                                <p>{{ item_data.description }}</p>


                                <vs-divider />

                                <div class="vx-row">
                                    <div class="vx-col flex flex-wrap items-center">
                                        <vs-button class="mr-4" type="border" icon-pack="feather" color="#1551b1" icon="icon-facebook" radius></vs-button>
                                        <vs-button class="mr-4" type="border" icon-pack="feather" color="#00aaff" icon="icon-twitter" radius></vs-button>
                                        <vs-button class="mr-4" type="border" icon-pack="feather" color="#c4302b" icon="icon-youtube" radius></vs-button>
                                        <vs-button class="mr-4" type="border" icon-pack="feather" color="#405DE6" icon="icon-instagram" radius></vs-button>
                                    </div>
                                </div>

                                <vs-divider/>

                                <vs-button class="mt-10">ADD TO CARD</vs-button>
                            </div>

                        </div>
                    </div>

                    <!-- Comment -->
                    <div>

                        <div class="comments-container mt-4">
                            <ul class="user-comments-list">
                                <li v-for="(comment, index) in comments" :key="index" class="commented-user flex items-center mb-4">
                                    <div class="mr-3"><vs-avatar class="m-0" src="" size="30px" /></div>
                                    <div class="leading-tight">
                                        <p class="font-medium">{{ comment.user.name }}</p>
                                        <span class="text-xs">{{ comment.text }}</span>
                                    </div>
                                    <div class="ml-auto">
                                        <div class="flex">
                                            <feather-icon icon="HeartIcon" svgClasses="h-4 w-4" class="mr-2 cursor-pointer"></feather-icon>
                                            <feather-icon icon="MessageSquareIcon" svgClasses="h-4 w-4" class="cursor-pointer"></feather-icon>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div class="post-comment">
                            <vs-textarea label="Add Comment" class="mb-2" v-model="newComment" />
                            <vs-button size="small" @click="postComment">Post Comment</vs-button>
                        </div>
                    </div>


                </div>

            </template>
        </vx-card>
        <ProductSlider></ProductSlider>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import ProductSlider from "../ProductSlider";

export default{
    components: {
        StarRating,
        ProductSlider
    },
    data() {
        return {
            item_data: null,
            error_occured: false,
            error_msg: "",
            commentPagination: {
                total: 1,
                page: 1
            },
            newComment: ""
            // Related Products Swiper
        }
    },
    computed: {
        // isInWishList() {
        //     return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
        // },
        isInCart() {
            return (itemId) => this.$store.getters['cart/isInCart'](itemId)
        },

        comments() {
            return this.$store.state.comment.all;
        }
    },
    methods: {
        // toggleItemInWishList(item) {
        //     this.$store.dispatch('eCommerce/toggleItemInWishList', item)
        // },
        // toggleItemInCart(item) {
        //     this.$store.dispatch('eCommerce/toggleItemInCart', item)
        // },
        fetchItemDetails(id) {
            this.$store.dispatch('product/detail', id)
                .catch(err => {
                    this.error_occured = true
                    this.error_msg = err.message
                    console.error(err);
                })
                .then (res=>{
                    this.item_data = res.data.data
                })
        },
        fetchItemComments(id) {
            this.$store.dispatch('comment/fetchComments', id)
            .then(res => {
                this.commentPagination = {
                    total: res.data.data.last_page,
                    page: res.data.data.current_page
                }

                console.log(this.comments, 'asdfjlj')
            }).catch(e => console.log(e))
        },
        postComment() {
            this.$store.dispatch('comment/postComment', {
                productId: this.productId,
                text: this.newComment
            })
        }
    },
    async created() {
        this.productId = this.$route.params.item_id;
        await this.fetchItemDetails(this.productId)
        await this.fetchItemComments(this.productId)
    }
}
</script>

<style lang="scss">

@import "@sass/vuexy/_variables.scss";

#item-detail-page {
    .color-radio {
        height: 2.28rem;
        width: 2.28rem;

        > div {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .item-features {
        background-color: #f7f7f7;

        .theme-dark & {
            background-color: $theme-dark-secondary-bg;
        }
    }

    .product-sales-meta-list {
        .vs-list--icon {
            padding-left: 0;
        }
    }


}
</style>
