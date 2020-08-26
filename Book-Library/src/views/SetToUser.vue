<template>
    <todoUser @onSubmit="save" />
    
</template>

<script>
    import todoUser from "../components/todoUser.vue";
    export default {
        name: "SetToUser",
        components: {
            todoUser,
        },
        methods: {
            save(data) {
                this.$store.commit('addUserItem', data);
                this.$router.push('/SetToUser');
            }
        }
    }
</script>

<style scoped>
.form-row{
    margin-right:auto;
    margin-left:auto;
}
</style>