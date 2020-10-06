<template>
  <div class="shop">
      <banner ></banner>
    <div class="products flex">
      <div class="w-1/5 mt-8">
        <shop-filter @fill="filterChange"></shop-filter>
      </div>
      <div class="w-4/5 pl-10 mr-10">
        <!-- BANNER  -->


        <!-- SEARCH -->
        <div class="relative mb-8 mt-8">
          <!-- SEARCH INPUT -->
          <vs-input
            class="w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg"
            placeholder="Search here"
            v-model="searchQuery"
            @change="search()"
            size="large"
          />

          <!-- SEARCH ICON -->
          <div slot="submit-icon" class="absolute top-0 right-0 py-4 px-6">
            <feather-icon icon="SearchIcon" svgClasses="h-6 w-6" />
          </div>

          <!-- CLEAR INPUT ICON -->
          <div
            slot="reset-icon"
            class="absolute top-0 right-0 py-4 px-6"
            v-show="searchQuery"
          >
            <feather-icon
              icon="XIcon"
              svgClasses="h-6 w-6 cursor-pointer"
              @click="refine('')"
            />
          </div>
        </div>
        <!-- END SEARCH -->

        <div class="items-grid-view vx-row match-height" appear>
          <div
            class="vx-col lg:w-1/4 md:w-1/3 sm:w-1/2 w-full"
            v-for="item in products"
            :key="item.id"
          >
            <item-grid-view :item="item">
              <!-- SLOT: ACTION BUTTONS -->
              <template slot="action-buttons" slot-scope="{ product }">
                <div class="flex flex-wrap">
                  <!-- PRIMARY BUTTON : REMOVE -->
                  <div
                    class="item-view-primary-action-btn p-3 flex flex-grow items-center justify-center cursor-pointer"
                  >
                    <feather-icon icon="HeartIcon" svgClasses="h-4 w-4" />

                    <span class="text-sm font-semibold ml-2">YÊU THÍCH</span>
                  </div>

                  <!-- SECONDARY BUTTON: MOVE TO CART -->
                  <div
                    class="item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer"
                    @click="addToCard(product)"
                  >
                    <feather-icon icon="ShoppingBagIcon" svgClasses="h-4 w-4" />

                    <span class="text-sm font-semibold ml-2">MUA </span>
                  </div>
                </div>
              </template>
            </item-grid-view>
          </div>
        </div>

        <!--            PAGINATION   -->
        <vs-pagination
          :total="totalPage"
          v-model="page"
          v-if="isMounted"
        ></vs-pagination>
      </div>
    </div>
    <category-slider></category-slider>
    <product-slider></product-slider>
  </div>
</template>
<script>
import ShopFilter from "./components/Filter";
import ItemGridView from "./components/ItemGridView";
import { mapActions, mapState } from "vuex";
import ProductSlider from "../ProductSlider";
import Banner from "./components/Banner";
import CategorySlider from '../CategorySlider'

export default {
  components: {
    Banner,
    ShopFilter,
    ItemGridView,
    ProductSlider,
    CategorySlider
  },
  data() {
    return {
      searchQuery: "",
      sortOptions: [{ label: "Height price", code: 1 }],
      sorter: "",
      page: 1,
      isMounted: false,
      totalPage: 1,
    };
  },
  computed: {
    ...mapState("product", {
      products: (state) => state.all,
    }),
  },
  methods: {
    ...mapActions("product", ["fetchProducts"]),
    addToCard(product) {
      this.$store.dispatch("cart/addToCart", product);
    },

    filterChange(e) {
      this.totalPage = e.last_page;
    },
    search() {
        let filter = this.$store.state.product.filter
        filter.name = this.searchQuery
        this.fetchProducts(filter)
    }
  },
  watch: {
    page(val) {
      let filter = this.$store.state.product.filter;
      filter.page = val;
      this.fetchProducts(filter);
    },
  },
  created() {
    this.isMounted = true;
  },
};
</script>
