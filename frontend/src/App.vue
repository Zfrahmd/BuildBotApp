<template>
  <div class="container bg_container">
    <Navigation />
    <div class="my-3 text-center topbanner ">
      <router-view name="topbanner"/>
    </div>
    <div class="py-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/layouts/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
  font-family: poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.bg_container {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.1);
}

.navigation {
  background-color: silver;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.2);
}

.navbar-nav .nav-link {
  color:rgb(145, 145, 145);
  transition: all 0.2s ease-in;
}

.navbar-nav .nav-link:hover {
  transition: all 0.2s ease-in;
}

.router-link-active {
  font-weight: bold;
}

.logo {
  height: 30px;
  vertical-align: middle;
  margin-right: 10px;
}

.topbanner {
  padding: 30px;
  background-color: #aaa;
  min-height: 100px;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.2);
}

.cart-items {
  position: relative;
  top: -10px;
  right: 10px;
  width: 20px;
  height: 23px;
  text-align: center;
  display: inline-block;
  border-radius: 100%;
  color: white;
  background-color: red;
}

</style>
