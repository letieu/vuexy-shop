<template>
    <div style="height: 500px">

        <!-- swiper1 -->
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" :dir="$vs.rtl ? 'rtl' : 'ltr'">
            <swiper-slide v-for="(item, i) in items" :key="i">
                <img class="responsive" :src="item" alt="banner">
            </swiper-slide>

            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>

        <!-- swiper2 Thumbs -->
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs" :dir="$vs.rtl ? 'rtl' : 'ltr'">
            <swiper-slide v-for="(item, i) in items" :key="i">
                <img class="responsive" :src='item' alt="banner">
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            swiperOptionTop: {
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionThumbs: {
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true
            },
            items: [
                '/images/banner/f1.jpg',
                '/images/banner/f2.jpg',
                '/images/banner/f3.jpg',
                '/images/banner/f4.jpg'
            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    },
    components: {
        swiper,
        swiperSlide
    },
}
</script>


<style lang="scss" scoped>
.swiper-container {
    background-color: #000;
}
.gallery-top {
    height: 80%!important;
    width: 100%;
}
.gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
    opacity: 1;
}
</style>

