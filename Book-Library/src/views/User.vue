<template>
    <div id="text-align:center">
        <div class="row mt-3">
            <div class="col-12" >
                <button @click="$router.push('/SetToUser')" class="btn btn-info btn-sm ">Set To User</button>
            </div>
        </div>
        <br>
        <br>
        <div class="row mt-3">
            <div class="col-12" >
                <button @click="$router.push('/GetFromUser')" class="btn btn-info btn-sm ">Get From User</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "User Operations",
       /* methods:{
            ileri3() {
                this.$router.push("/SetToUser")

            },
            ileri4() {
                this.$router.push("/GetFromUser")

            },*/
    }
</script>

<style scoped>

    button {
        padding: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
    }

</style>
