<template>
  <MainLayout>
  </MainLayout>

  <div class="body-div d-flex justify-content-center" style="width: 100%; height: 100%; margin-top: 2%;">
    <div class="d-flex flex-wrap justify-content-center" style="width: 60%;gap: 20px;">
      <div v-for="product in products" :key="product.id" class="card text-white bg-dark" style="width: 18rem;">
        <img class="card-img-top" src="public/img/market-place-logo-white.png" alt="Card image cap">
        <div class="card-body" style="height: fit-content">
          <hr>
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.price}} €</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainLayout from "../layouts/MainLayout.vue";

export default {
  components: {MainLayout},

  layout: 'MainLayout',

  data() {
    return {
      products: [],
    }
  },
  created() {
    this.axios.get(`/product?product_type_id=${this.$route.params.id}`).then(response => {
      this.products = response.data.data
    });
  }
}

</script>
<style>
body{
  background-color: #1A1E21;
}
.body-div{
  z-index: 1000;
  left: 0;
  top: 0;
  height: 80%;
}
</style>