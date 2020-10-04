<template>
    <div id="ecommerce-checkout-demo">
        <form-wizard
            ref="checkoutWizard"
            color="rgba(var(--vs-primary), 1)"
            :title="null"
            :subtitle="null"
            :hide-buttons="true">

            <!-- tab 1 content -->
            <tab-content title="GIỎ HÀNG" icon="feather icon-shopping-cart" class="mb-5">

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
                                    <p class="text-success text-sm">Còn hành </p>

                                    <p class="mt-4 font-bold text-sm">Số lượng </p>
                                    <vs-input-number min="1" max="10" :value="getQuantity(item.id)" @input="updateItemQuantity($event, item.id)" class="inline-flex" />

                                </template>

                                <!-- SLOT: ACTION BUTTONS -->
                                <template slot="action-buttons">

                                    <!-- PRIMARY BUTTON: REMOVE -->
                                    <div class="item-view-primary-action-btn p-3 rounded-lg flex flex-grow items-center justify-center cursor-pointer mb-3" @click="removeItemFromCart(item)">
                                        <feather-icon icon="XIcon" svgClasses="h-4 w-4" />
                                        <span class="text-sm font-semibold ml-2">Xóa </span>
                                    </div>

                                    <!-- SECONDARY BUTTON: MOVE-TO/VIEW-IN WISHLIST -->
<!--                                    <div class="item-view-secondary-action-btn bg-primary p-3 rounded-lg flex flex-grow items-center justify-center text-white cursor-pointer" @click="wishListButtonClicked(item)">-->
<!--                                        <feather-icon icon="HeartIcon" :svgClasses="[{'text-white fill-current': isInWishList(item.objectID)}, 'h-4 w-4']" />-->
<!--                                        <span class="text-sm font-semibold ml-2" v-if="isInWishList(item.objectID)">Sản phẩm yêu thích </span>-->
<!--                                        <span class="text-sm font-semibold ml-2" v-else>WISHLIST</span>-->
<!--                                    </div>-->
                                </template>
                            </item-list-view>
                        </div>
                    </div>

                    <!-- RIGHT COL -->
                    <div class="vx-col lg:w-1/3 w-full">
                        <vx-card>
                            <p class="font-semibold mb-3">Ước tính </p>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey"> Tổng tiền </span>
                                <span>{{totalPrice}} đ</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey">Phí giao hàng </span>
                                <span class="text-danger">200000 đ</span>
                            </div>

                            <vs-divider />

                            <div class="flex justify-between font-semibold mb-3">
                                <span>Tổng </span>
                                <span>{{totalPrice + 20000}} đ</span>
                            </div>

                            <vs-button class="w-full" @click="$refs.checkoutWizard.nextTab()">Đặt hàng </vs-button>
                        </vx-card>
                    </div>
                </div>

                <!-- IF NO ITEMS IN CART -->
                <vx-card title="You don't have any items in your cart." v-else>
                    <vs-button @click="$router.push('/apps/eCommerce/shop').catch(() => {})">Sản phẩm </vs-button>
                </vx-card>

            </tab-content>

            <!-- tab 2 content -->
            <tab-content title="ĐỊA CHỈ " icon="feather icon-home" class="mb-5">

                <div class="vx-row">

                    <!-- LEFT COL: NEW ADDRESS -->
                    <div class="vx-col lg:w-2/3 w-full">
                        <vx-card title="Add New Address" subtitle="Kiểm trả đơn hàng trước khi đặt hàng " class="mb-base">

                            <form data-vv-scope="add-new-address">
                                <div class="vx-row">

                                        <vs-input
                                            v-validate="'required'"
                                            name="address"
                                            label="Địa chỉ: "
                                            v-model="address.address"
                                            class="w-full mt-5" />
                                </div>

                                <div class="vx-row">
                                        <vs-input
                                            v-validate="'required'"
                                            name="city"
                                            label="Thành phố:"
                                            v-model="address.city"
                                            class="w-full mt-5" />

                                </div>

                                <div class="vx-row">

                                        <vs-input
                                            v-validate="'required'"
                                            name="state"
                                            label="Số điện thoại :"
                                            v-model="address.phone"
                                            class="w-full mt-5" />

                                </div>
                                <vs-button class="mt-6 ml-auto flex" @click.prevent="submitNewAddressForm">LƯU ĐỊA CHỈ VÀ XÁC NHẬN </vs-button>
                            </form>
                        </vx-card>
                    </div>

                    <!-- RIGHT COL: CONTINUE WITH SAVED ADDRESS -->
                    <div class="vx-col lg:w-1/3 w-full">
                        <vx-card title="Địa chỉ " v-for="address in addresses" :key="address.id">
                            <div>
                                <p>{{address.address}}</p>
                                <p>{{address.city}}</p>
                                <p class="my-4">{{address.phone}}</p>
                            </div>

                            <vs-divider />

                            <vs-button class="w-full" @click="choseAddress(address.id)">GIAO TỚI ĐỊA CHỈ NÀY </vs-button>
                        </vx-card>
                    </div>

                </div>
            </tab-content>

            <!-- tab 3 content -->
            <tab-content title="Thanh toán " icon="feather icon-credit-card" class="mb-5">

                <div class="vx-row">

                    <!-- LEFT COL: PAYMENT OPTIONS -->
                    <div class="vx-col lg:w-2/3 w-full">
                        <vx-card title="Lựa chọn thanh toán " subtitle="Be " class="mb-base">
                            <vs-chip>Chỉ có thể thanh toán bằng tiền mặt </vs-chip>
                        </vx-card>
                    </div>

                    <!-- RIGHT COL: PRICE -->
                    <div class="vx-col lg:w-1/3 w-full">
                        <vx-card title="Thông tin hóa đơn ">

                            <div class="flex justify-between mb-2">
                                <span>Tổng số tiền </span>
                                <span class="font-semibold">{{totalPrice}} đ</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span>Phí giao hàng: </span>
                                <span class="text-success">20.000 đ</span>
                            </div>

                            <vs-divider />

                            <div class="flex justify-between">
                                <span>Tổng số tiền : </span>
                                <span class="font-semibold">${{totalPrice + 20000}}</span>
                            </div>

                            <vs-divider></vs-divider>

                            <vs-button @click="createOrder">
                                XÁC NHẬN ĐƠN HÀNG 
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
                title: `Đã tạo đơn hàng ^__^ `,
                text: 'Bạn đã đặt hàng thành công  !',
                accept: this.acceptAlert
            })
        },
        acceptAlert() {
            this.$vs.notify({
                color: 'success',
                title: 'Cảm ơn bạn đã đặt hàng  ^_^ ',
                text: 'Đơn hàng đang được xử lý  .... '
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
