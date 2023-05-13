<template>
  <MainLayout>
  </MainLayout>

  <div class="body-div d-flex justify-content-center" style="width: 100%; height: 100%; margin-top: 2%;">
    <div class="d-flex flex-wrap justify-content-center" style="width: 60%;gap: 20px;">
      <div v-for="product_type in product_types" :key="product_types.id" class="card text-white bg-dark" style="width: 15rem;">
        <div class="card-body justify-content-center  align-items-center" style="height: fit-content">
          <router-link :to="`/list/${product_type.id}`" class="nav-link text-white text-center" style="font-size: 20px;font-weight: bolder;">{{product_type.name}}</router-link>
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

  name: "category",

  data() {
    return {
      product_types:[],
    }
  },
  created() {
    this.axios.get(`/productType?product_category_id=${this.$route.params.id}`).then(response => {
      this.product_types = response.data.data
    })
  }
}
</script>

<style scoped>

</style>