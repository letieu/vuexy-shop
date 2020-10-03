<template>
    <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary"
                class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
        <div class="mt-6 flex items-center justify-between px-6">
            <h4>{{ Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE" }} ITEM</h4>
            <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
        </div>
        <vs-divider class="mb-0"></vs-divider>

        <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

            <div class="p-6">

                <!-- Product Image -->
                <template v-if="dataImg">

                    <!-- Image Container -->
                    <div class="img-container w-64 mx-auto flex items-center justify-center">
                        <img :src="dataImg" alt="img" class="responsive">
                    </div>

                    <!-- Image upload Buttons -->
                    <div class="modify-img flex justify-between mt-5">
                        <input type="file" class="hidden" ref="updateImgInput" @change="updateCurrImg" accept="image/*">
                        <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Thay đổi ảnh 
                        </vs-button>
                        <vs-button type="flat" color="#999" @click="dataImg = null">Xóa ảnh </vs-button>
                    </div>
                </template>

                <!-- NAME -->
                <vs-input label="Tên " v-model="dataName" class="mt-5 w-full" name="item-name"/>
                <!--        <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>-->

                <!-- CATEGORY -->
                <vs-select v-model="dataCategory" label="Loại sản phẩm" class="mt-5 w-full" name="item-category">
                    <vs-select-item :key="item.id" :value="item.id" :text="item.name"
                                    v-for="item in category_choices" />
                </vs-select>
                <!--        <span class="text-danger text-sm" v-show="errors.has('item-category')">{{ errors.first('item-category') }}</span>-->

                <!-- BRANCH -->
                <vs-select v-model="dataBranch" label="Thương hiệu " class="mt-5 w-full" name="item-branch">
                    <vs-select-item :key="item.id" :value="item.id" :text="item.name"
                                    v-for="item in branch_choices"/>
                </vs-select>
                <!-- END BRANCH -->

                <!-- DESCRIPTION -->
                <vs-input label="Mô tả " v-model="dataDescription" class="mt-5 w-full" name="item-description"/>
                <!-- END DESCRIPTION -->

                <!-- PRICE -->
                <vs-input
                    icon-pack="feather"
                    icon="icon-dollar-sign"
                    label="Giá "
                    v-model="dataPrice"
                    class="mt-5 w-full"
                    name="item-price"/>
                <!--        <span class="text-danger text-sm" v-show="errors.has('item-price')">{{ errors.first('item-price') }} đ</span>-->

                <!-- Upload -->
                <!-- <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" /> -->

                <div class="upload-img mt-5" v-if="!dataImg">
                    <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
                    <vs-button @click="$refs.uploadImgInput.click()">THÊM ẢNH</vs-button>
                </div>
            </div>
        </VuePerfectScrollbar>

        <div class="flex flex-wrap items-center p-6" slot="footer">
            <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">TẠO </vs-button>
            <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">HỦY</vs-button>
        </div>
    </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    props: {
        isSidebarActive: {
            type: Boolean,
            required: true
        },
        data: {
            type: Object,
            default: () => {
            },
        }
    },
    watch: {
        isSidebarActive(val) {
            if (!val) return
            if (Object.entries(this.data).length === 0) {
                this.initValues()
            } else {
                let {category, id, image, name, branch, description, price} = JSON.parse(JSON.stringify(this.data))

                this.dataId = id
                this.dataCategory = category.name
                this.dataBranch = branch.name
                this.dataDescription = description
                this.dataImg = image
                this.dataName = name
                this.dataPrice = price
                this.initValues()

            }
            // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
        }
    },
    data() {
        return {
            errors: new Map(),
            dataId: null,
            dataName: "",
            dataCategory: null,
            dataBranch: null,
            dataDescription: null,
            dataImg: null,
            dataPrice: 0,
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
        }
    },
    computed: {
        category_choices() {
            return this.$store.state.category.all
        },
        branch_choices() {
            return this.$store.state.branch.all
        },
        isSidebarActiveLocal: {
            get() {
                return this.isSidebarActive
            },
            set(val) {
                if (!val) {
                    this.$emit('closeSidebar')
                    // this.$validator.reset()
                    // this.initValues()
                }
            }
        },
        isFormValid() {
            return this.dataName && this.dataCategory && (this.dataPrice > 0)
        }
    },
    methods: {
        initValues() {
            if (this.data.id) return
            this.dataId = null
            this.dataName = ""
            this.dataCategory = null
            this.dataOrder_status = "pending"
            this.dataPrice = 0
            this.dataImg = null
        },
        submitData() {
            if (isNaN(this.dataCategory)) {
                this.dataCategory = this.category_choices.find(item => item.name == this.dataCategory).id
            }
            if (isNaN(this.dataBranch)) {
                this.dataBranch = this.branch_choices.find(item => item.name == this.dataBranch).id
            }
            const obj = {
                id: this.dataId,
                name: this.dataName,
                image: this.dataImg,
                branch_id: this.dataBranch,
                description: this.dataDescription,
                category_id: this.dataCategory,
                price: this.dataPrice
            }

            this.$store.dispatch("product/createOrUpdate", obj).catch(err => console.log(err))

            this.$emit('closeSidebar')
        },
        updateCurrImg(input) {
            if (input.target.files && input.target.files[0]) {
                var reader = new FileReader()
                reader.onload = e => {
                    this.dataImg = e.target.result
                }
                reader.readAsDataURL(input.target.files[0])
            }
        }
    },
    components: {
        VuePerfectScrollbar,
    },
    mounted() {
        console.log('side bar mounted')
    }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
    ::v-deep .vs-sidebar--background {
        z-index: 52010;
    }

    ::v-deep .vs-sidebar {
        z-index: 52010;
        width: 400px;
        max-width: 90vw;

        .img-upload {
            margin-top: 2rem;

            .con-img-upload {
                padding: 0;
            }

            .con-input-upload {
                width: 100%;
                margin: 0;
            }
        }
    }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>
