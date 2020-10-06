<template>
    <div class="related-products text-center px-6">

        <div class="related-headings mb-4 text-center">
            <h2 class="uppercase">Sản phẩm mới</h2>
            <p>Mọi người cũng tìm kiếm</p>
        </div>
        <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl"
                class="related-product-swiper px-12 py-6">
            <swiper-slide v-for="item in items" :key="item.objectId" class="p-6 rounded cursor-pointer">

                <!-- Item Heading -->
                <div class="item-heading mb-4">
                    <p class="text-lg font-semibold truncate">{{ item.name }}</p>
                    <p class="text-sm">
                        <span class="mr-2">Thương hiệu </span>
                        <span>{{ item.brand }}</span>
                    </p>
                </div>

                <!-- Item Image -->
                <div class="img-container w-32 mx-auto my-base">
                    <img class="responsive" :src="'/images/' + item.image" :alt="item.name">
                </div>

                <!-- Item Meta -->
                <div class="item-meta">
                    <p class="text-lg font-medium text-primary">{{ item.price }} đ</p>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>

import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import StarRating from 'vue-star-rating'

export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 55,
                breakpoints: {
                    1600: {
                        slidesPerView: 4,
                        spaceBetween: 55,
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 55,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 55
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 55
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },

            // Below is data which is common in any item
            // Algolia's dataSet don't provide this kind of data. So, here's dummy data for demo
            is_hearted: false,
            items: []
        }
    },

    components: {
        swiper, swiperSlide, StarRating
    },
    mounted() {
       this.$store.dispatch('product/newProducts')
        .then(res => this.items = res.data.data)
    }
}
</script>

<style lang="scss">

@import "@sass/vuexy/_variables.scss";
.related-product-swiper {
    // padding-right: 2rem;
    // padding-left: 2rem;

    .swiper-wrapper {
        padding-bottom: 2rem;

        > .swiper-slide {
            background-color: #f7f7f7;
            box-shadow: 0 4px 18px 0 rgba(0,0,0,0.1), 0 5px 12px 0 rgba(0,0,0,0.08) !important;

            .theme-dark & {
                background-color: $theme-light-dark-bg;
            }
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        transform: scale(.5);
        filter: hue-rotate(40deg);
    }

    .swiper-button-next {
        right: 0
    }

    .swiper-button-prev {
        left: 0;
    }
}
</style>
