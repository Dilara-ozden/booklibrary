<template>
    <div><h3>Book List</h3>


        <div  v-if="!filteredItems.length"
              class="text-center alert alert-info mt-2">
            No Data
        </div>

        <todoItem v-else
                  v-for="item in filteredItems" :key="item.index"
                  :index="item.index"
                  :bookName="item.BookName"
                  :author="item.Author"
                  :bookImageUrl="item.BookImageUrl"
        />
    </div>
</template>

<script>
    import todoItem from "../components/todoItem";
    export default {
        name: "BookList",
        components: {
            todoItem,
        },
        data() {
            return {

            }
        },
        computed: {
            filteredItems() {
                console.log(this.$store.getters.getTodoList);
                return this.$store.getters.getTodoList;

            }
        }
    }
</script>

<style scoped>

</style>