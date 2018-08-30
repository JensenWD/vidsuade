<template>
    <div class="col-12" style="min-height: 0;">
        <nav class="navbar navbar-expand-lg bg-transparent">
            <router-link class="navbar-brand ml-4" to="/">
                <img src="../assets/home/Logo_NavBar.png" class="img-fluid logo" alt="logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                        <router-link class="nav-link mr-sm-4" to="/pricing">Pricing</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link mr-sm-1" to="/contact">Contact us</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "HeaderMenu",
        mounted() {
            $(document).scroll(function () {
                let nav = $(".navbar");
                if ($(window).scrollTop() === 0) {
                    if ((window.location.href.indexOf("privacy-policy") > -1) || (window.location.href.indexOf("terms") > -1)) {
                        nav.removeClass('bg-transparent');
                        nav.addClass('bg-dark');
                    } else {
                        nav.removeClass('bg-dark');
                        nav.addClass('bg-transparent');
                    }
                } else {
                    nav.removeClass('bg-transparent');
                    nav.addClass('bg-dark');
                }
            });
        }
    }
</script>

<style lang="sass" scoped>
    .navbar
        position: absolute
        left: 0
        top: 0
        width: 100%
        transition: 0.15s
    .nav-item, .nav-link
        color: white
        text-transform: uppercase
    .logo
        max-width: 150px
        width: 100%
</style>
