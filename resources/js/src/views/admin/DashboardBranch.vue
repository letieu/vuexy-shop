<template>
    <vs-table  pagination max-items="15" search :data="branches">

        <template slot="header">
            <h3 class="mr-5">Branch</h3>
            <vs-button @click="showInput = !showInput" radius color="warning" type="filled" icon-pack="feather" icon="icon-plus"></vs-button>

            <vs-prompt
                @cancel="clearInput"
                @accept="submit"
                @close="showInput = false"
                :is-valid="branch.name"
                :active.sync="showInput">
                <div class="con-exemple-prompt">
                    Tên thương hiệu :
                    <vs-input placeholder="Name" v-model="branch.name" class="mt-4 mb-2 w-full" />
                    <vs-alert v-show="error" color="danger" vs-icon="new_releases" >
                        Không được để trống
                    </vs-alert>
                </div>
            </vs-prompt>

        </template>

        <template slot="thead">
            <vs-th sort-key="email">ID</vs-th>
            <vs-th sort-key="username">Tên </vs-th>
            <vs-th sort-key="website">Số sản phẩm</vs-th>
            <vs-th sort-key="id">Đã tạo</vs-th>
            <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                <vs-td :data="data[indextr].id">
                    {{ data[indextr].id }}
                </vs-td>

                <vs-td :data="data[indextr].name">
                    {{ data[indextr].name }}
                </vs-td>

                <vs-td :data="data[indextr].products_count">
                    {{ data[indextr].products_count }}
                </vs-td>

                <vs-td :data="data[indextr].created_at">
                    {{ data[indextr].created_at }}
                </vs-td>

                <vs-td :data="data[indextr].id">
                    <vs-chip color="success" @click="edit">
                        <vs-avatar icon-pack="feather" icon="icon-edit" />
                        <span @click="edit(indextr)">edit</span>
                    </vs-chip>
                    <vs-chip color="danger" @click="edit">
                        <vs-avatar icon-pack="feather" icon="icon-trash" />
                        <span @click="remove(data[indextr].id)">delete</span>
                    </vs-chip>
                </vs-td>
            </vs-tr>
        </template>
    </vs-table>

</template>

<script>
import {mapActions} from 'vuex';

export default {
    data() {
        return {
            selected: [],
            branch: {},
            showInput: false,
            error: ''
        }
    },
    computed: {
        branches() {
            return this.$store.state.branch.all
        }
    },
    methods: {
        ...mapActions('branch', ['create', 'update', 'remove']),
        clearInput() {
            this.branch.name = ''
        },
        submit(event) {
            if (!this.branch.name.length) {
                this.error = true
                return
            }
            if (this.branch.id) {
                this.update(this.branch).catch(error => console.log(error))
            } else {
                this.create(this.branch).catch(err => console.log(err))
            }

            this.branch = {}
        },
        edit(index) {
            this.branch = {...this.branches[index]}
            this.showInput = true
        }

    }
}
</script>
