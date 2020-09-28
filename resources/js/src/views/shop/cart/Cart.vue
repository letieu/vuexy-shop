<template>
    <div id="ecommerce-checkout-demo">
        <form-wizard
            ref="checkoutWizard"
            color="rgba(var(--vs-primary), 1)"
            :title="null"
            :subtitle="null"
            :hide-buttons="true">

            <!-- tab 1 content -->
            <tab-content title="Cart" icon="feather icon-shopping-cart" class="mb-5">

                <!-- IF CART HAVE ITEMS -->
                <div class="vx-row" v-if="cartItems.length">

                    <!-- LEFT COL -->
                    <div class="vx-col lg:w-2/3 w-full relative">
                        <div class="items-list-view" v-for="(item, index) in cartItems" :key="item.objectID">
                            <item-list-view :item="item" class="mb-base">

                                <!-- SLOT: ITEM META -->
                                <template slot="item-meta">
                                    <h6
                                        class="item-name font-semibold mb-1 cursor-pointer hover:text-primary"
                                        @click="$router.push({name: 'ecommerce-item-detail-view', params: {item_id: item.objectID }}).catch(() => {})">{{ item.name }}</h6>
                                    <p class="text-success text-sm">In Stock</p>

                                    <p class="mt-4 font-bold text-sm">Quantity</p>
                                    <vs-input-number min="1" max="10" :value="getQuantity(item.id)" @input="updateItemQuantity($event, item.id)" class="inline-flex" />

                                </template>

                                <!-- SLOT: ACTION BUTTONS -->
                                <template slot="action-buttons">

                                    <!-- PRIMARY BUTTON: REMOVE -->
                                    <div class="item-view-primary-action-btn p-3 rounded-lg flex flex-grow items-center justify-center cursor-pointer mb-3" @click="removeItemFromCart(item)">
                                        <feather-icon icon="XIcon" svgClasses="h-4 w-4" />
                                        <span class="text-sm font-semibold ml-2">REMOVE</span>
                                    </div>

                                    <!-- SECONDARY BUTTON: MOVE-TO/VIEW-IN WISHLIST -->
<!--                                    <div class="item-view-secondary-action-btn bg-primary p-3 rounded-lg flex flex-grow items-center justify-center text-white cursor-pointer" @click="wishListButtonClicked(item)">-->
<!--                                        <feather-icon icon="HeartIcon" :svgClasses="[{'text-white fill-current': isInWishList(item.objectID)}, 'h-4 w-4']" />-->
<!--                                        <span class="text-sm font-semibold ml-2" v-if="isInWishList(item.objectID)">WISHLIST</span>-->
<!--                                        <span class="text-sm font-semibold ml-2" v-else>WISHLIST</span>-->
<!--                                    </div>-->
                                </template>
                            </item-list-view>
                        </div>
                    </div>

                    <!-- RIGHT COL -->
                    <div class="vx-col lg:w-1/3 w-full">
                        <vx-card>
                            <p class="font-semibold mb-3">Price Details</p>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey"> Total price</span>
                                <span>${{totalPrice}}</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey">Delivery Charges</span>
                                <span class="text-danger">$2</span>
                            </div>

                            <vs-divider />

                            <div class="flex justify-between font-semibold mb-3">
                                <span>Total</span>
                                <span>${{totalPrice + 2}}</span>
                            </div>

                            <vs-button class="w-full" @click="$refs.checkoutWizard.nextTab()">PLACE ORDER</vs-button>
                        </vx-card>
                    </div>
                </div>

                <!-- IF NO ITEMS IN CART -->
                <vx-card title="You don't have any items in your cart." v-else>
                    <vs-button @click="$router.push('/apps/eCommerce/shop').catch(() => {})">Browse Shop</vs-button>
                </vx-card>

            </tab-content>

            <!-- tab 2 content -->
            <tab-content title="Address" icon="feather icon-home" class="mb-5">

                <div class="vx-row">

                    <!-- LEFT COL: NEW ADDRESS -->
                    <div class="vx-col lg:w-2/3 w-full">
                        <vx-card title="Add New Address" subtitle="Be sure to check &quot;Deliver to this address&quot; when you have finished" class="mb-base">

                            <form data-vv-scope="add-new-address">
                                <div class="vx-row">

                                        <vs-input
                                            v-validate="'required'"
                                            name="address"
                                            label="Address"
                                            v-model="address.address"
                                            class="w-full mt-5" />
                                </div>

                                <div class="vx-row">
                                        <vs-input
                                            v-validate="'required'"
                                            name="city"
                                            label="Town/City:"
                                            v-model="address.city"
                                            class="w-full mt-5" />

                                </div>

                                <div class="vx-row">

                                        <vs-input
                                            v-validate="'required'"
                                            name="state"
                                            label="State:"
                                            v-model="address.phone"
                                            class="w-full mt-5" />

                                </div>
                                <vs-button class="mt-6 ml-auto flex" @click.prevent="submitNewAddressForm">SAVE AND DELIVER HERE</vs-button>
                            </form>
                        </vx-card>
                    </div>

                    <!-- RIGHT COL: CONTINUE WITH SAVED ADDRESS -->
                    <div class="vx-col lg:w-1/3 w-full">
                        <vx-card title="address" v-for="address in addresses" :key="address.id">
                            <div>
                                <p>{{address.address}}</p>
                                <p>{{address.city}}</p>
                                <p class="my-4">{{address.phone}}</p>
                            </div>

                            <vs-divider />

                            <vs-button class="w-full" @click="choseAddress(address.id)">DELIVER TO THIS ADDRESS</vs-button>
                        </vx-card>
                    </div>

                </div>
            </tab-content>

            <!-- tab 3 content -->
            <tab-content title="Payment" icon="feather icon-credit-card" class="mb-5">

                <div class="vx-row">

                    <!-- LEFT COL: PAYMENT OPTIONS -->
                    <div class="vx-col lg:w-2/3 w-full">
                        <vx-card title="Payment Options" subtitle="Be sure to click on correct payment option" class="mb-base">
                            <vs-chip>ONLY PAY ON CASH AVAILABLE</vs-chip>
                        </vx-card>
                    </div>

                    <!-- RIGHT COL: PRICE -->
                    <div class="vx-col lg:w-1/3 w-full">
                        <vx-card title="Price Details">

                            <div class="flex justify-between mb-2">
                                <span>TOTAL PRICE</span>
                                <span class="font-semibold">${{totalPrice}}</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span>Delivery Charges</span>
                                <span class="text-success">$2</span>
                            </div>

                            <vs-divider />

                            <div class="flex justify-between">
                                <span>Amount Payable</span>
                                <span class="font-semibold">${{totalPrice + 2}}</span>
                            </div>

                            <vs-divider></vs-divider>

                            <vs-button @click="createOrder">
                                SUBMIT ORDER
                            </vs-button>
                        </vx-card>
                    </div>
                </div>
            </tab-content>

        </form-wizard>
    </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
const ItemListView = () => import('./components/ItemListView')

export default {
    data() {
        return {
            address: {
                phone: '',
                city: "",
                address: ""
            },
            addressId: null
        }
    },
    computed: {
        cartItems() {
            return this.$store.getters['cart/products']
        },
        totalPrice() {
            return this.$store.getters['cart/total']
        },
        addresses() {
            return this.$store.state.user.addresses
        }
        // isInWishList() {
        //     return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
        // },
    },
    methods: {
        getQuantity(id) {
            let item = this.$store.getters['cart/quantities'].find(item => item.id === id)
            return item.quantity
        },
        // TAB 1
        removeItemFromCart(item) {
            this.$store.dispatch('cart/deleteFromCart', item.id)
        },
        // wishListButtonClicked(item) {
        //     // Toggle in Wish List
        //     if (this.isInWishList(item.objectID)) this.$router.push('/apps/eCommerce/wish-list').catch(() => {})
        //     else {
        //         this.toggleItemInWishList(item)
        //         this.removeItemFromCart(item)
        //     }
        // },
        // toggleItemInWishList(item) {
        //     this.$store.dispatch('eCommerce/toggleItemInWishList', item)
        // },
        updateItemQuantity(quantity, id) {
            let currentQuantity = this.getQuantity(id)
            if (quantity > currentQuantity) {
                this.$store.dispatch('cart/incrementItemCart', id)
            } else {
                this.$store.dispatch('cart/decrementItemCart', id)
            }
        },

        // TAB 2
        submitNewAddressForm() {
            return new Promise(() => {
                this.$validator.validateAll('add-new-address').then(result => {
                    if (result) {
                        this.$store.dispatch('user/saveAddress', this.address).then(res => {
                            this.addressId = res.data.data.id
                        })
                        this.$refs.checkoutWizard.nextTab()
                    } else {
                        this.$vs.notify({
                            title: 'Error',
                            text: 'Please enter valid details',
                            color: 'warning',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle'
                        })
                    }
                })
            })
        },
        choseAddress(id) {
            this.addressId = id
            this.$refs.checkoutWizard.nextTab()
        },

        // TAB 3
        createOrder() {
            let total = this.totalPrice
            let address = this.addressId
            let products = this.$store.getters['cart/quantities']
            this.$store.dispatch('order/createOrder', {
                total,
                address,
                products
            })
                .then(res => {
                    this.clearCart()
                    this.openAlert()

                })
                .catch(error => console.log('tao don hang loi'))
        },

        clearCart() {
            this.$store.dispatch('cart/clear')
        },

        openAlert() {
            this.$vs.dialog({
                color: 'success',
                title: `Created order ^__^ `,
                text: 'You can play around and we will bring this for you, Happy !',
                accept: this.acceptAlert
            })
        },
        acceptAlert() {
            this.$vs.notify({
                color: 'success',
                title: 'Thank you ^_^ ',
                text: 'Your order is processing .... '
            })
            this.$router.push('/')
        }
    },
    components: {
        ItemListView,
        FormWizard,
        TabContent
    },
    mounted() {
        this.$store.dispatch('user/fetchAddresses')
    }
}
</script>

<style lang="scss" scoped>
#ecommerce-checkout-demo {
    .item-view-primary-action-btn {
        color: #2c2c2c !important;
        background-color: #f6f6f6;
    }

    .item-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
    }

    .vue-form-wizard {
        padding-bottom: 0;

        ::v-deep .wizard-header {
            padding: 0;
        }

        ::v-deep .wizard-tab-content {
            padding-right: 0;
            padding-left: 0;
            padding-bottom: 0;

            .wizard-tab-container{
                margin-bottom: 0 !important;
            }
        }
    }
}
</style>
