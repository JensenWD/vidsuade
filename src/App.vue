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
    font-family: 'Helvetica Neue', sans-serif
    font-weight: 300
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #838283

  .fs-16
    p, span, li, div, a
      font-size: 16px

  .helvetica
    font-family: 'Helvetica Neue', sans-serif

  h1, h2
    font-size: 3rem

  h3, h4, h5
    font-family: 'Helvetica Neue', sans-serif
    font-weight: 500

  p, span, li, div, a
    font-family: 'Helvetica Neue', sans-serif
    font-size: 18px
    font-weight: 300

  .font-white
    color: white

  .text-underline
    text-decoration: underline !important

  .font-blue
    color: #009EE9

  .font-orange
    color: #E98000

  .font-grey
    color: grey

  .footer_section_bg
    background-image: url("./assets/home/Footer_CTA@2x.png")
    background-size: cover
</style>
