<template>
  <div class="col-12" style="min-height: 0;">
    <nav class="navbar navbar-expand-lg bg-transparent">
      <router-link class="navbar-brand ml-4" to="/">
        <img src="../assets/home/Logo_NavBar.png" class="img-fluid logo" alt="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav nav mr-4">
          <li class="nav-item active">
            <router-link class="nav-link mr-sm-4" to="/why-video">Why video?</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mr-sm-4" to="/about-us">About us</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-sm-4" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-sm-1" href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "HeaderMenu"
    }
</script>

<style lang="sass" scoped>
  .navbar
    position: absolute
    left: 0
    top: 0
    width: 100%
  .nav-item, .nav-link
    color: white
    text-transform: uppercase
  .logo
    max-width: 150px
    width: 100%
</style>
