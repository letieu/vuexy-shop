<template>
    <div class="vx-card mr-5" id="filter" style="max-height: 1000px; overflow-y: scroll;">
        <vs-list style="padding-right: 10px">
<!--            PRICE FILL  -->
            <vs-list-header title="Price" color="danger"></vs-list-header>
            <vs-list-item>
                <div>
                    <vs-slider max=100 color="success" v-model="filter.price" /> {{filter.price}}
                </div>
            </vs-list-item>

<!--            BRANCH FILL  -->
            <vs-list-header title="Branch"></vs-list-header>
            <div>
                <vs-list-item>
                    <vs-radio v-model="filter.branch" :vs-value="null">All</vs-radio>
                </vs-list-item>
                <vs-list-item
                    v-for="branch in branches"
                    :key="branch.id">
                    <vs-radio
                        v-model="filter.branch"
                        :vs-value="branch.id">
                        {{ branch.name }}  ({{ branch.products_count }})
                    </vs-radio>
                </vs-list-item>
            </div>

<!--            CATEGORY FILL-->
            <vs-list-header title="Category" color="success"></vs-list-header>
            <vs-radio v-model="filter.category" :vs-value="null">All</vs-radio>
            <vs-list-item
                v-for="(category,i) in categories"
                :key="i">
                <vs-radio
                    v-model="filter.category"
                    :vs-value="category.id"
                >
                    {{ category.name }}  ({{ category.products_count }})

                </vs-radio>
            </vs-list-item>

        </vs-list>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    data() {
        return {
            filter: {
                branch: null,
                price: null,
                category: null
            }
        }
    },
    mounted() {
        this.fetchBranches()
        this.fetchCategories()
        this.fetchProducts(this.filter).then(res => this.$emit('fill', res))
    },
    watch: {
        filter: {
            deep: true,
            handler(filter) {
                this.fetchProducts(filter).then(res => {
                    this.$emit('fill', res)
                })
            }
        }
    },
    computed: {
        ...mapState('category', {
            categories: state => state.all
        }),
        ...mapState('branch', {
            branches: state => state.all
        })
    },
    methods: {
        ...mapActions('category', ['fetchCategories']),
        ...mapActions('branch', ['fetchBranches']),
        ...mapActions('product', ['fetchProducts'])
    }
}
</script>

<style lang="scss">
#filter {
    &::-webkit-scrollbar {
        display: none;
    }
    .vs-list--header {
        box-shadow: none !important;
    }
    .con-vs-radio {
        display: flex;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .vs-list--slot {
        margin-left: 5px !important;
        width: 100%;
        padding-right: 50px;

    }
    .con-vs-slider {
        min-width: 250px;
    }
}
</style>

