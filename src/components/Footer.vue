<template>
  <div class="col-12 footer_bg pt-4 pb-4 p-4">
    <div class="row">
      <div class="container pt-2 pb-2">
        <div class="row align-items-center justify-content-around">
          <div class="d-block d-sm-none col-12 mb-4 text-center">
            <img src="../assets/home/Footer_Logo_Icon.png" style="max-width: 51px" class="img-fluid" alt="">
          </div>
          <div class="col-12 col-sm p-0 text-center">
            <router-link to="/about-us">
              <span class="text-uppercase font-white">About us</span>
            </router-link>
          </div>
          <div class="d-none d-sm-block icon-border"></div>
          <div class="col-12 col-sm p-0 text-center">
            <router-link to="/contact">
              <span class="text-uppercase font-white">Contact us</span>
            </router-link>
          </div>
          <div class="d-none d-sm-block p-0 col-sm-2 text-center">
            <img src="../assets/home/Footer_Logo_Icon.png" style="max-width: 51px" class="img-fluid" alt="">
          </div>
          <div class="col-12 col-sm p-0 text-center mr-sm-3">
            <router-link to="/privacy-policy">
              <span class="text-uppercase font-white">Privacy policy</span>
            </router-link>
          </div>
          <div class="d-none d-sm-block icon-border"></div>
          <div class="col-12 col-sm p-0 text-center">
            <router-link to="/terms">
              <span class="text-uppercase font-white">Legal</span>
            </router-link>
          </div>
        </div>

        <div class="row mt-2 mt-sm-4 pt-2">
          <div class="col-12 text-center">
            <span class="font-white text-uppercase">Find us on social media</span>
          </div>
          <div class="col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 text-center mt-2">
            <a href="https://www.facebook.com/Vidsuade-466688843846965" target="_blank" class="social-icon">
              <img src="../assets/home/Footer_FB_Icon.png" alt="" class="img-fluid">
            </a>
            <a href="https://www.instagram.com/vidsuade_/" target="_blank" class="social-icon">
              <img src="../assets/home/Footer_IG_Icon.png" alt="" class="img-fluid">
            </a>
            <a href="https://www.youtube.com/channel/UC7lLW5MeWlQxgKWfdbv-kYQ" target="_blank" class="social-icon">
              <img src="../assets/home/Footer_YT_Icon.png" alt="" class="img-fluid">
            </a>
            <a href="https://www.linkedin.com/company/33247289/" target="_blank" class="social-icon">
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
  .icon-border
    width: 1px !important
    height: 20px
    background: white

  @media (max-width: 991px)
    span
      font-size: 13px
</style>
