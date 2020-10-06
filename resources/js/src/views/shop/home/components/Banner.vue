<template>
  <div class="carousel-example" style="border-radius: 10px;">
    <swiper
      :options="swiperOption"
      :dir="$vs.rtl ? 'rtl' : 'ltr'"
      :key="$vs.rtl"
      style="height: 400px; overflow: hidden"
    >
      <swiper-slide>
        <img
          class="responsive"
          src="@assets/images/banner/banner-1.jpg"
          alt="banner"
        />
      </swiper-slide>

      <swiper-slide>
        <img
          class="responsive"
          src="@assets/images/banner/banner-2.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@assets/images/banner/banner-1.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="@assets/images/banner/banner-2.jpg"
          alt="banner"
        />
      </swiper-slide>

    </swiper>


  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped>
.carousel-example img {
    height: 400px;
}
</style>
