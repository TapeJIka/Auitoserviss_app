<template>
  <nav class="navbar navbar-light text-white bg-dark">
    <div class="d-flex text-center align-items-center" style="padding-left: 50px">
      <img src="public/img/market-place-logo-white.png"  width="60" height="60" class="d-inline-block align-top" alt="">
      <a class="navbar-brand text-white" href="/" style="padding-left: 50px">Market-place</a>
    </div>
  </nav>

  <section class="text-center text-lg-start text-white" style="display: flex; justify-content: center; align-items: center">
    <div class="container py-4 align-items-center justify-content-center">
      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-6 mb-5 mb-lg-0" style="width: 400px">
          <div class="card cascading-right" style="
            background: hsla(0,0%,14%,0.55);
            backdrop-filter: blur(30px);
            ">
            <div class="card-body p-5 shadow-5 text-center ">
              <h2 class="fw-bold mb-5">Now Log in</h2>
              <p v-for="error in formErrors.data" style="color: red">{{error}}</p>
              <form @submit.prevent="login()">
                  <div class="form-outline mb-4 d-flex flex-column align-items-start" >
                    <label class="form-label" for="form3Example3">Email address</label>
                    <input v-model="form.email" type="email" id="form3Example3" class="form-control text-white" style="background: transparent;"/>
                    <p v-for="error in formErrors.email" style="color: red">{{error}}</p>
                  </div>

                  <div class="form-outline mb-4 d-flex flex-column align-items-start" >
                    <label class="form-label" for="form3Example4">Password</label>
                    <input v-model="form.password" type="password" id="form3Example4" class="form-control text-white" style="background: transparent;"/>
                    <p v-for="error in formErrors.password" style="color: red">{{error}}</p>
                  </div>

                <button class="btn btn-primary btn-block mb-4">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-5 mb-lg-0">
          <img src="public/img/Screenshot_76.png" class="w-100 rounded-4 shadow-4"
               alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import router from "../router";

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      formErrors:{
        data: null,
        email: null,
        password: null,
      },
    }
  },
  methods: {
    login(){
      this.formErrors = {
        data: null,
        email: null,
        password: null,
      }
      this.axios.post('/login', this.form).then(response => {
        console.log(response.data)
        window.localStorage.setItem('access_token', response.data.access_token)
        window.localStorage.setItem('user', JSON.stringify(response.data.user))
        this.$router.push('/');
      }).catch(e => {
        console.log(e)
        Object.keys(e.response.data.errors).forEach((key) => {
          this.formErrors[key] = e.response.data.errors[key]
        })
      })
    }
  },
}

</script>
<style>
.body{
  background-color: #1A1E21;
}

.input{
  background: transparent;
  border: none;
}

.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
</style>