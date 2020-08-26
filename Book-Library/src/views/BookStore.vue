<template>
  <div id="text-align: center">
    <div class="row mt-3">
      <div class="col-12" >
        <button @click="$router.push('/BookAdd')" class="btn btn-info btn-sm ">Add New Book</button>
      </div>
    </div>
    <br>
    <br>
    <div class="row mt-3">
      <div class="col-12" >
        <button @click="$router.push('/BookList')" class="btn btn-info btn-sm ">Book List</button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Book Store Operation'
  /*methods:{
    ileri() {
      this.$router.push("/BookAdd")

    },
    ileri2() {
      this.$router.push("/BookList")

    }
  }*/
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