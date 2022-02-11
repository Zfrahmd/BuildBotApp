<template>
  <nav class="navbar navbar-expand-lg navbar-light navigation">
    <div class="container-fluid">
      <div>
        <img class="logo" src="@/assets/build-a-bot-logo.png" alt="logo">
      </div>
      <a class="navbar-brand" href="/">Build A Bot</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=
      "#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Build" class="nav-link">Build Robot</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Search" class="nav-link">Search</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/About" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/parts/browse" class="nav-link">Browse Parts</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <div>
          <router-link to="/cart" class="btn btn-outline-secondary">
            Cart
          </router-link>
          <div class="cart-items">
            {{cart.length}}
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navigation',
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
  },
};

</script>
