<!-- =========================================================================================
    File Name: VerticalNavMenuItem.vue
    Description: Vertical NavMenu item component. Extends vuesax framework's 'vs-sidebar-item' component
    Component Name: VerticalNavMenuItem
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div
    class="vs-sidebar--item"
    :class="[
      {'vs-sidebar-item-active'            : activeLink},
      {'disabled-item pointer-events-none' : isDisabled}
    ]" >

      <router-link
        tabindex="-1"
        v-if="to"
        exact
        :class="[{'router-link-active': activeLink}]"
        :to="to"
        :target="target" >
          <vs-icon v-if="!featherIcon" :icon-pack="iconPack" :icon="icon" />
          <feather-icon v-else :class="{'w-3 h-3': iconSmall}" :icon="icon" />
          <slot />
      </router-link>

      <a v-else :target="target" :href="href" tabindex="-1" @click="fill">
          <font-awesome-icon :icon="['fas', icon]" style="font-size: 22px"/>

          <slot />
      </a>
  </div>
</template>

<script>
export default {
  name: 'v-nav-menu-item',
  props: {
    icon        : { type: String,                 default: "user-secret"               },
    iconSmall   : { type: Boolean,                default: false            },
    iconPack    : { type: String,                 default: 'material-icons' },
    href        : { type: [String, null],         default: '#'              },
    to          : { type: [String, Object, null], default: null             },
    slug        : { type: String,                 default: null             },
    index       : { type: [String, Number],       default: null             },
    featherIcon : { type: Boolean,                default: true             },
    target      : { type: String,                 default: '_self'          },
    isDisabled  : { type: Boolean,                default: false            },
      id        : {type: Number}
  },
  computed: {
    activeLink() {
      return this.id == this.$store.state.product.filter.category
    }
  },
    methods: {
      fill() {
          let filter = {...this.$store.state.product.filter};

          filter.category = this.id
          filter.page = 1
          this.$store.dispatch('product/fetchProducts', filter)
      }
    }
}

</script>

