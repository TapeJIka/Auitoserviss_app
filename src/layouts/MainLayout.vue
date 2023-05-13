<template>
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px; height: 100%">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-between" style="width: 100%">
        <img src="public/img/market-place-logo-white.png" width="60" height="60" class="d-inline-block align-top" alt=""><use xlink:href="/"></use>
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" style="padding-left: 20px">
          <span class="fs-4">Market-place</span>
        </a>
      </div>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="/"></use></svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16"><use xlink:href="/chats"></use></svg>
            Chats
          </a>
        </li>
        <hr>
      </ul>
      <span class="fs-5" style="padding-left: 20px">Kategorijas</span>
      <hr>
      <ul v-for="category in categories" :key="categories.id" class="nav nav-pills flex-column mb-auto">
        <li>
          <router-link :to="`/category/${category.id}`" class="nav-link text-white" style="padding-left: 50px">{{category.name}}</router-link>
        </li>
      </ul>
      <hr>
    </div>

    <div v-if="!userData" class="d-flex align-items-center justify-content-center" style="position: fixed; bottom: 20px; margin-left: 60px">
      <div class="Register-button d-flex align-items-center justify-content-center">
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li>
            <router-link to="/register" class="nav-link text-white" >Reģistreties</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="userData" class="dropdown d-flex" style="position: fixed; bottom: 20px;">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="true">
        <img src="public/img/Deault_pfp.png" alt="" width="40" height="38" class="rounded-circle me-2">
        <strong>{{userData.first_name}} {{userData.last_name}}</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="/product_form">Izveidot sludinajumu</a></li>
        <li><a class="dropdown-item" href="#">Iesaistijumi</a></li>
        <li><a class="dropdown-item" href="#">Profils</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a @click="logout()" class="dropdown-item" href="#">Iziet</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getUserData} from "../helpers/auth.js";

export default {

  data() {
    return {
      categories:[],
      userData:[],
    }
  },
  methods: {
    logout(){
      const token = window.localStorage.getItem('access_token')
      if (!token){
        console.log('A gde ?')
      }else {
        this.axios.get('/logout',{
          headers:{
            Authorization: `Bearer ${token}`
          }
        }).then(data => {
          window.localStorage.removeItem('access_token')
          window.localStorage.removeItem('user')
          window.location.href = '/'
        })
      }
    }
  },
  mounted() {
    this.userData = getUserData();
  },
  created() {
    this.axios.get('/categories').then(response => {
      this.categories = response.data.data
    })
  }
}
</script>

<style>

.Register-button{
  border: 1px solid white;
  border-radius: 5px;
  transition: .3s;
}

.Register-button:hover{
  transform: scale(1.1);
}


@media only screen and (max-width: 600px) {
  #sidebar {
    display: none;
    position:fixed;
    width: 200px;
    z-index: 1000;
    left: 0;
    top: 0;
    height: 100%;
  }
}

#sidebar {
  position:fixed;
  width: 200px;
  z-index: 1000;
  left: 0;
  top: 0;
  height: 100%;
}
</style>
