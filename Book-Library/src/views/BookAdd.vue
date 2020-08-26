<template>
    <todoForm @onSubmit="save" />
</template>

<script>
    import todoForm from "../components/todoForm";
    export default {
        name: "BookAdd.vue",
        components: {
            todoForm,
        },
        methods: {
            save(data) {
                this.$store.commit('addTodoItem', data);
                this.$router.push('/BookAdd');
            }
        }
    }
</script>

<style scoped>

</style>
