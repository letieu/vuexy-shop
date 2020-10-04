<template>
    <div class="carousel-example mt-10 mb-10">
        <!-- swiper -->
        <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
            <swiper-slide>
              <img class="responsive" src="@assets/images/banner/category-1.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/banner/category-1.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/banner/category-1.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/banner/category-1.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/banner/category-1.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/banner/category-1.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/banner/category-1.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
              <img class="responsive" src="@assets/images/banner/category-1.jpg" alt="banner">
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 50,
                // init: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    }
                }
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>