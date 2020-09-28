<template>
    <div class="order">
        <vs-table :data="orders">
            <template slot="header">
                <h3 class="mr-5">Orders</h3>
            </template>
            <template slot="thead">
                <vs-th>ID</vs-th>
                <vs-th>Username</vs-th>
                <vs-th>Created at</vs-th>
                <vs-th>Total</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="tr.id">
                        {{ tr.id }}
                    </vs-td>
                    <vs-td :data="tr.user.name">
                        {{ tr.user.name }}
                    </vs-td>
                    <vs-td :data="tr.created_at">
                        {{ tr.created_at }}
                    </vs-td>
                    <vs-td :data="tr.total">
                        {{ tr.total }}
                    </vs-td>

                    <template class="expand-user" slot="expand">
                        <div class="con-expand-users w-full">
                            <div class="con-btns-user flex items-center justify-between">
                                <div class="con-userx flex items-center justify-start">
                                    <vs-avatar :badge="tr.id" size="45px" :src="`https://randomuser.me/api/portraits/women/${indextr}.jpg`" />
                                    <span>{{ tr.user.name }}</span>
                                </div>
                                <div class="flex">
                                    <vs-button type="border" size="small" icon-pack="feather" icon="icon-phone" class="mr-2"></vs-button>
                                    <vs-button type="border" size="small" icon-pack="feather" icon="icon-send" color="success" class="mr-2"></vs-button>
                                    <vs-button type="border" size="small" icon-pack="feather" icon="icon-trash" color="danger"></vs-button>
                                </div>
                            </div>
                            <vs-list>
                                <vs-list-header title="User address">User address</vs-list-header>
                                <vs-list-item icon-pack="feather" icon="icon-mail" :title="tr.user.email"></vs-list-item>
                                <vs-list-item icon-pack="feather" icon="icon-globe" :title="tr.address.address"></vs-list-item>
                                <vs-list-item icon-pack="feather" icon="icon-home" :title="tr.address.city"></vs-list-item>
                                <vs-list-item icon-pack="feather" icon="icon-phone" :title="tr.address.phone"></vs-list-item>

                                <vs-list-header title="Products list">Product</vs-list-header>
                                <vs-card>
                                    <span v-for="product of tr.products" :key="product.id">
                                    {{product.name}}
                                </span>
                                </vs-card>
                            </vs-list>

                        </div>
                    </template>
                </vs-tr>
            </template>
        </vs-table>
    </div>
</template>

<script>
export default {
    computed: {
        orders() {
            return this.$store.state.order.all
        }
    },
    mounted() {
        this.$store.dispatch('order/fetchOrders')
    }
}

</script>

