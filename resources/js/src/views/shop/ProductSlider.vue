<template>
    <div class="related-products text-center px-6">

        <div class="related-headings mb-8 text-center">
            <h2 class="uppercase">Related Products</h2>
            <p>People also search for this items</p>
        </div>
        <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl"
                class="related-product-swiper px-12 py-6">
            <swiper-slide v-for="item in related_items" :key="item.objectId" class="p-6 rounded cursor-pointer">

                <!-- Item Heading -->
                <div class="item-heading mb-4">
                    <p class="text-lg font-semibold truncate">{{ item.name }}</p>
                    <p class="text-sm">
                        <span class="mr-2">by</span>
                        <span>{{ item.brand }}</span>
                    </p>
                </div>

                <!-- Item Image -->
                <div class="img-container w-32 mx-auto my-base">
                    <img class="responsive" :src="item.image" :alt="item.name">
                </div>

                <!-- Item Meta -->
                <div class="item-meta">
                    <star-rating :show-rating="false" :rating="item.rating" :star-size="14" class="justify-center"
                                 read-only/>
                    <p class="text-lg font-medium text-primary">${{ item.price }}</p>
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

            related_items: [{
                "name": "Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum",
                "brand": "Apple",
                "price": 229,
                "image": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/01.png",
                "rating": 4,
                "objectID": "5546604",
            },
                {
                    "name": "Beats by Dr. Dre - Powerbeats2 Wireless Earbud Headphones - Black/Red",
                    "brand": "Beats by Dr. Dre",
                    "price": 199.99,
                    "image": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/08.png",
                    "rating": 4,
                    "objectID": "5565002",
                },
                {
                    "name": "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
                    "brand": "Amazon",
                    "price": 39.99,
                    "image": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/03.png",
                    "rating": 4,
                    "objectID": "5477500",
                },
                {
                    "name": "Apple - Apple Watch Nike+ 42mm Silver Aluminum Case Silver/Volt Nike Sport Band - Silver Aluminum",
                    "brand": "Apple",
                    "price": 399,
                    "image": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/07.png",
                    "rating": 4,
                    "objectID": "5547700",
                },
                {
                    "name": "Google - Chromecast Ultra - Black",
                    "brand": "Google",
                    "price": 69.99,
                    "image": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/05.png",
                    "rating": 4,
                    "objectID": "5578628",
                },
                {
                    "name": "Beats by Dr. Dre - Beats EP Headphones - White",
                    "brand": "Beats by Dr. Dre",
                    "price": 129.99,
                    "image": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/02.png",
                    "rating": 4,
                    "objectID": "5577781",
                },
                {
                    "name": "LG - 40\" Class (39.5\" Diag.) - LED - 1080p - HDTV - Black",
                    "brand": "LG",
                    "price": 279.99,
                    "image": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/products/09.png",
                    "rating": 4,
                    "objectID": "5613404",
                }]
        }
    },
    components: {
        swiper, swiperSlide, StarRating
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
