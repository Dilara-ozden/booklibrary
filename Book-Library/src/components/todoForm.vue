<template>
    <div>
        <h3>Add New Book </h3>
        <ValidationObserver v-slot="{ handleSubmit }" >
            <form @submit.prevent="handleSubmit(submitForm)">
                <div class="row mt-3">
                    <div class="col-12">
                        <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                            <input type="text" name="BookName" class="w-50" v-model="formModel.BookName" />
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                            <input type="text" name="Author" class="w-50" v-model="formModel.Author" />
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                            <input type="text" name="Author" class="w-50" v-model="formModel.BookImageUrl" />
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <button class="btn btn-info btn-sm" type="submit" id="text-align: center">Add New
                        </button>
                    </div>
                </div>
            </form>
        </ValidationObserver>
    </div>
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
                    BookName: '',
                    Author: '',
                    BookImageUrl: ''
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
                    BookName: '',
                    Author: '',
                    BookImageUrl: ''
                }
            },

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
