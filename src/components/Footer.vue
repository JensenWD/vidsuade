<template>
  <div class="col-12 footer_bg pt-4 pb-4 p-4">
    <div class="row">
      <div class="container pt-2 pb-2">
        <div class="row align-items-center justify-content-around">
          <div class="col text-center">
            <router-link to="/about-us">
              <span class="text-uppercase font-white">About us</span>
            </router-link>
          </div>
          <div class="col text-center">
            <router-link to="/contact">
              <span class="text-uppercase font-white">Contact us</span>
            </router-link>
          </div>
          <div class="col text-center">
            <img src="../assets/home/Footer_Logo_Icon.png" style="max-width: 51px" class="img-fluid" alt="">
          </div>
          <div class="col text-center">
            <a href="">
              <span class="text-uppercase font-white">Privacy policy</span>
            </a>
          </div>
          <div class="col text-center">
            <router-link to="/terms">
              <span class="text-uppercase font-white">Legal</span>
            </router-link>
          </div>
        </div>

        <div class="row mt-4 pt-2">
          <div class="col-12 text-center">
            <span class="font-white text-uppercase">Find us on social media</span>
          </div>
          <div class="col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 text-center mt-2">
            <a href="" class="social-icon">
              <img src="../assets/home/Footer_FB_Icon.png" alt="" class="img-fluid">
            </a>
            <a href="" class="social-icon">
              <img src="../assets/home/Footer_IG_Icon.png" alt="" class="img-fluid">
            </a>
            <a href="" class="social-icon">
              <img src="../assets/home/Footer_YT_Icon.png" alt="" class="img-fluid">
            </a>
            <a href="" class="social-icon">
              <img src="../assets/home/Footer_Linkedin_Icon.png" alt="" class="img-fluid">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="sass" scoped>
  .footer_bg
    background-color: #797979
  span
    font-size: 16px
  .social-icon:not(:first-child)
    margin-left: 0.75rem
  .social-icon img
    max-width: 40px
  a:hover
    text-decoration: none
  .col:nth-child(1), .col:nth-child(4)
    border-right: 1px solid white
</style>
