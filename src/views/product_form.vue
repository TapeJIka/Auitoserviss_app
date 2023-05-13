<template>
  <MainLayout>
  </MainLayout>

  <section>
    <div class="d-flex justify-content-center align-items-center" style="width: 100%; height: 100% ; margin-top: 5%">
      <div class="d-flex" style="width: 40%;">
        <form>
          <div class="form-outline mb-4 d-flex flex-column align-items-start text-white">
            <label for="formFileSm" class="form-label">Produkta bilde</label>
            <input class="form-control form-control-sm" id="formFileSm" type="file" style="background: transparent;" />
          </div>

          <div class="form-outline mb-4 d-flex flex-column align-items-start text-white">
            <label class="form-label" for="form6Example3">Produkta nosaukums</label>
            <input v-model="ProductForm.name" type="text" id="form6Example3" class="form-control text-white" style="background: transparent;"/>
            <p v-for="error in formErrors.name" style="color: red">{{error}}</p>
          </div>

          <div class="row mb-4">
            <div class="col">
              <div class="form-outline d-flex flex-column align-items-start text-white">
                <label class="form-label" for="form6Example1">Marka</label>
                <input v-model="ProductForm.mark" type="text" id="form6Example1" class="form-control text-white" style="background: transparent;" />
                <p v-for="error in formErrors.mark" style="color: red">{{error}}</p>
              </div>
            </div>
            <div class="col">
              <div class="form-outlined-flex flex-column align-items-start text-white">
                <label class="form-label" for="form6Example2">Modelis</label>
                <input v-model="ProductForm.model" type="text" id="form6Example2" class="form-control text-white" style="background: transparent;"/>
                <p v-for="error in formErrors.model" style="color: red">{{error}}</p>
              </div>
            </div>
          </div>

          <div class="form-outline mb-4 d-flex flex-column align-items-start text-white">
            <label class="form-label" for="form6Example3">Datums</label>
            <input v-model="ProductForm.date" type="date" id="form6Example3" class="form-control text-white" style="background: transparent;"/>
            <p v-for="error in formErrors.date" style="color: red">{{error}}</p>
          </div>

          <div class="row mb-4">
            <div class="col">
              <div class="form-outline d-flex flex-column align-items-start text-white">
                <label class="form-label" for="form6Example1">Valsts</label>
                <input v-model="ProductForm.country" type="text" id="form6Example1" class="form-control text-white" style="background: transparent;"/>
                <p v-for="error in formErrors.country" style="color: red">{{error}}</p>
              </div>
            </div>
            <div class="col">
              <div class="form-outline d-flex flex-column align-items-start text-white">
                <label class="form-label" for="form6Example2">Pilseta</label>
                <input v-model="ProductForm.city" type="text" id="form6Example2" class="form-control text-white" style="background: transparent;"/>
                <p v-for="error in formErrors.city" style="color: red">{{error}}</p>
              </div>
            </div>
          </div>

          <div class="form-outline mb-4 d-flex flex-column align-items-start text-white">
            <label class="form-label" for="form6Example3">Cena</label>
            <input v-model="ProductForm.price" type="number" id="form6Example3" class="form-control text-white" style="background: transparent;"/>
            <p v-for="error in formErrors.price" style="color: red">{{error}}</p>
          </div>

          <div class="form-outline mb-4 d-flex justify-content-between align-items-center text-white" style="width: 40%">

            <div class="form-check">
              <input v-model="ProductForm.condition" :value="true" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                jaun
              </label>
            </div>

            <div class="form-check">
              <input v-model="ProductForm.condition" :value="false" class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                lietota
              </label>
            </div>
            <p v-for="error in formErrors.condition" style="color: red">{{error}}</p>
          </div>

          <div class="form-outline mb-4 d-flex flex-column align-items-start text-white">
            <label class="form-label" for="form6Example3">Produkta apakškategorija</label>
            <input v-model="ProductForm.product_type_id" type="number" id="form6Example3" class="form-control text-white" style="background: transparent;"/>
            <p v-for="error in formErrors.product_type_id" style="color: red">{{error}}</p>
          </div>

          <div class="form-outline mb-4 d-flex flex-column align-items-start text-white">
            <label class="form-label" for="form6Example7">Papildus info :</label>
            <textarea v-model="ProductForm.description" class="form-control text-white" id="form6Example7" rows="4" style="background: transparent;"></textarea>
            <p v-for="error in formErrors.description" style="color: red">{{error}}</p>
          </div>
          <button @click="formSubmit()" type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
        </form>
      </div>
    </div>

  </section>
</template>

<script>
import MainLayout from "../layouts/MainLayout.vue";
import {getUserData} from "../helpers/auth.js";

export default {
  components: {MainLayout},

  layout: 'MainLayout',
  name: "product_form",

  data() {
    return {
      ProductForm: {
        image: 'image',
        name: null,
        description: null,
        mark: null,
        model: null,
        date: null,
        country: null,
        city: null,
        condition: null,
        user_id: null,
        product_type_id: null,
      },
      formErrors: {
        image: null,
        name: null,
        description: null,
        mark: null,
        model: null,
        date: null,
        country: null,
        city: null,
        condition: null,
        user_id: null,
        product_type_id: null,
      },
      userData:[],
    }
  },
  mounted() {
    this.userData = getUserData();
    this.ProductForm.user_id = this.userData.id
  },

  methods: {
    formSubmit(){
      this.formErrors = {
        data: null,
        email: null,
        password: null,
      }
      this.axios.post('/product', this.ProductForm).then(response => {
        console.log(response.data.data)
        this.$router.push('/');
      }).catch(e => {
        Object.keys(e.response.data.errors).forEach((key) => {
          this.formErrors[key] = e.response.data.errors[key]
        })
      })
    }
  },
}
</script>

<style scoped>

</style>