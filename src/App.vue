<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row fixed-nav">
        <header-menu></header-menu>
      </div>

      <router-view/>

      <div class="row">
        <footer-menu></footer-menu>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderMenu from './components/HeaderMenu';
  import FooterMenu from './components/Footer';

  export default {
    name: 'App',
    components: {HeaderMenu, FooterMenu}
  }
</script>

<style lang="sass">
  #app
    font-family: 'Avenir', Helvetica, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50

  .helvetica
    font-family: 'Helvetica Neue', sans-serif

  h1, h2
    font-size: 3rem

  h1, h2, h3
    font-family: 'Helvetica Neue', sans-serif

  .font-white
    color: white

  .text-underline
    text-decoration: underline !important

  .font-blue
    color: #009EE9

  .font-orange
    color: #E98000

  p, span, li
    font-size: 18px

  .footer_section_bg
    background-image: url("./assets/home/Footer_CTA@2x.png")
    background-size: cover
</style>
