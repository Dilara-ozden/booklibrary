<template>
    <ValidationObserver v-slot="{ handleSubmit }" >
        <form @submit.prevent="handleSubmit(submitForm)">
        <div class="form-group">
            <br>
            <select class="custom-select browser-default" v-model="formModel.bookName"  required>
                <option v-for="product in filteredItems" v-bind:value="{ text: product.BookName }">{{ product.BookName }}
                </option>
            </select>

            <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationCustom01"></label>
                <input type="text" class="form-control" id="validationCustom01" v-model="formModel.number" placeholder="Please insert user identity number"
                       required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationCustom02"></label>
                <input type="text" class="form-control" id="validationCustom02" v-model="formModel.adSoyad" placeholder="Please enter user name and surname"
                       required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="validationCustom03"></label>
                <input type="text" class="form-control" id="validationCustom03" v-model="formModel.adres" placeholder="please enter user address"
                       required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
        </div>

        <button class="btn btn-primary btn-sm" type="submit" id="text-align: center" >Submit form</button>
    </form>
    </ValidationObserver>
</template>

<script>
    import { mapState } from 'vuex';
    import Vue from "vue";
    import { ValidationProvider, ValidationObserver } from 'vee-validate';
    export default {
        name: "BookAdd.vue",
        props: {
            formData: {
                type: Object,
                default: null,
            }
        },
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        data() {
            return {
                formModel: {
                    bookName : this.BookName,
                    number : '',
                    adSoyad: '',
                    adres: ''
                }
            }
        },
        methods: {
            submitForm() {
                this.$emit('onSubmit', this.formModel);
                this.clearForm();
            },
            clearForm() {
                this.formModel = {
                    bookName : '',
                    number : '',
                    adSoyad: '',
                    adres: ''
                }
            },

        },
        computed: {
            filteredItems() {
                console.log(this.$store.getters.getTodoList);
                return this.$store.getters.getTodoList;

            }
        },
        mounted() {
            if (this.formData) {
                this.formModel = this.formData;
            }
        }

        //computed: {
        //    ...mapState(['searchMovies'])

        //}
    }

</script>

<style scoped>

</style>