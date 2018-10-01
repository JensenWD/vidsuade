<template>
    <div class="col-12" style="min-height: 0;">
        <nav class="navbar navbar-expand-lg navbar-light">
            <router-link class="navbar-brand ml-4" to="/">
                <img src="../assets/home/Logo_NavBar.png" class="img-fluid logo" alt="logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav nav mr-lg-4">
                    <li class="nav-item active">
                        <router-link class="nav-link closeOnClick mr-lg-4" to="/">Home</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link closeOnClick mr-lg-4" to="/why-video">Why video?</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link closeOnClick mr-lg-4" to="/about-us">About us</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a @click="$('#subMenu').dropdown('toggle')" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                        </a>
                        <div id="subMenu" class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="nav-link closeOnClick mr-lg-4" to="/services">Video Services</router-link>
                            <router-link class="nav-link closeOnClick mr-lg-4" to="/animatedlogo">Logo animation</router-link>
                            <router-link class="nav-link closeOnClick mr-lg-4" to="/pricing">Pricing</router-link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link closeOnClick mr-lg-1" to="/contact">Contact us</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
  export default {
    name: "HeaderMenu",
    methods: {
      checkWidth() {
        var $window = $(window);
        var windowsize = $window.width();
        console.log(windowsize);

        if (windowsize < 992) {
          $('.closeOnClick').click(function () {
            if ($('.navbar-toggler[aria-expanded]').attr('aria-expanded')) {
              $('.navbar-toggler').click();
            }
          });
        }
      }
    },
    mounted() {
      let self = this;
      $(document).scroll(function () {
        let nav = $(".navbar");
        if ($(window).scrollTop() === 0) {
          if ((window.location.href.indexOf("privacy-policy") > -1) || (window.location.href.indexOf("terms") > -1)) {
            //nav.removeClass('bg-transparent');
            nav.addClass('bg-color');
          } else {
            nav.removeClass('bg-color');
            //nav.addClass('bg-transparent');
          }
        } else {
          //nav.removeClass('bg-transparent');
          nav.addClass('bg-color');
        }
      });

      $(document).ready(function () {
        self.checkWidth();
      });
    }
  }
</script>

<style lang="sass" scoped>
  .bg-color
    background: #004f75 !important

  .navbar-toggler
    border: none !important

  .navbar
    position: absolute
    left: 0
    top: 0
    width: 100%
    transition: 0.15s
    background: transparent
    .nav-item, .nav-link
      color: white !important
      text-align: center
      text-transform: uppercase
      font-size: 16px
    .logo
      max-width: 150px
      width: 100%
    .dropdown-menu
      .nav-link
        color: #004f75 !important
        padding: .5rem .25rem
        margin: 0 auto !important

  @media(max-width: 991px)
    .navbar
      /*border-top: 1px solid #a8a8a8*/
      border-bottom: 1px solid #a8a8a8
      background: #004f75 !important
    .nav-item, .nav-link
      color: white !important
    .navbar-toggler-icon
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important
    .nav-item, .nav-link
      color: grey !important
    .bg-color
      .nav-item, .nav-link
        color: white !important
    /*ul.nav*/
      /*li.dropdown:hover*/
        /*> .dropdown-menu*/
          /*display: block*/
</style>
