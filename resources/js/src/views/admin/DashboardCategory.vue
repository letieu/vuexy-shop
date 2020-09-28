<template>
    <vs-table  pagination max-items="15" search :data="categories">

        <template slot="header">
            <h3 class="mr-5">Category</h3>
            <vs-button @click="showInput = !showInput" radius color="warning" type="filled" icon-pack="feather" icon="icon-plus"></vs-button>

            <vs-prompt
                @cancel="clearInput"
                @accept="submit"
                @close="showInput = false"
                :is-valid="category.name"
                :active.sync="showInput">
                <div class="con-exemple-prompt">
                    Nam of category:
                    <vs-input placeholder="Name" v-model="category.name" class="mt-4 mb-2 w-full" />
                    <vs-alert v-show="error" color="danger" vs-icon="new_releases" >
                        Fields can not be empty please enter the data
                    </vs-alert>
                </div>
            </vs-prompt>

        </template>

        <template slot="thead">
            <vs-th sort-key="email">ID</vs-th>
            <vs-th sort-key="username">Name</vs-th>
            <vs-th sort-key="website">Products</vs-th>
            <vs-th sort-key="id">Created</vs-th>
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
            category: {},
            showInput: false,
            error: ''
        }
    },
    computed: {
        categories() {
            return this.$store.state.category.all
        }
    },
    methods: {
        ...mapActions('category', ['create', 'update', 'remove']),
        clearInput() {
            this.category.name = ''
        },
        submit(event) {
            if (!this.category.name.length) {
                this.error = true
                return
            }
            if (this.category.id) {
                this.update(this.category).catch(error => console.log(error))
            } else {
                this.create(this.category).catch(err => console.log(err))
            }

            this.category = {}
        },
        edit(index) {
            this.category = {...this.categories[index]}
            this.showInput = true
        }

    }
}
</script>
