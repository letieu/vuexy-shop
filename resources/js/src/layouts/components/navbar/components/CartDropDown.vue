<template>
  <!-- NOTIFICATIONS -->
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <feather-icon icon="ShoppingCartIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" :badge="items.length" />

    <vs-dropdown-menu class="notification-dropdown dropdown-custom vx-navbar-dropdown">

      <div class="notification-top text-center p-5 bg-primary text-white">
        <h3 class="text-white">{{ items.length }} Sản phẩm </h3>
        <p class="opacity-75">Giỏ hàng </p>
      </div>

      <VuePerfectScrollbar ref="mainSidebarPs" class="scroll-area--nofications-dropdown p-0 mb-10" :settings="settings" :key="$vs.rtl">
        <ul class="bordered-items">
          <li v-for="(ntf, index) in items" :key="ntf.id" class="flex justify-between px-4 py-4 notification cursor-pointer">
            <div class="flex items-start">
              <img :src="'/images/' + ntf.image"  alt="img" title="img" width="50"/>
                <span class="pl-3 pr-3">{{ntf.name}}</span>
            </div>
            <vs-chip color="success">{{ quantities[index].quantity }}</vs-chip>
          </li>
        </ul>
      </VuePerfectScrollbar>

      <div class="
        checkout-footer
        fixed
        bottom-0
        rounded-b-lg
        text-primary
        w-full
        p-2
        font-semibold
        text-center
        border
        border-b-0
        border-l-0
        border-r-0
        border-solid
        d-theme-border-grey-light
        cursor-pointer"
        @click="$router.push('/checkout')">
        <span>Xem tất cả </span>
      </div>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .60,
      },
    }
  },
  computed: {
    items() {
        return this.$store.getters["cart/products"]
    },
    quantities() {
        return this.$store.getters["cart/quantities"]
    }
  },
  methods: {
  }
}

</script>

