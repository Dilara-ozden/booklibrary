<template>
    <div  class="px-3 py-3 mb-3">
        <div class="card">

            <div class="card-header d-flex justify-content-between">
                {{ bookName }}
            </div>
            <div class="card-body d-flex justify-content-between">
                <div><img :src="bookImageUrl" width="50px" /></div>
                <p>{{ author }}</p>
                <blockquote class="blockquote mb-0">
                    <div>
                        <button class="btn btn-success" >In Store</button>
                        <button type="submit" class="btn btn-danger" @click="gotoDelete(index)">Delete</button>
                    </div>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "todoItem",
        props: ['index', 'bookName', 'author', 'bookImageUrl'],
        data() {
            return {

            }
        },
        methods: {
            gotoDelete(index) {
                if(confirm("Do you really want to delete?")){
                this.$store.state.todoList.splice(index);
                }
            }
        },
    }
</script>

<style scoped>

</style>
