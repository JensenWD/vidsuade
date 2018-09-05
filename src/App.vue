<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row sticky-top">
        <ad-bar></ad-bar>
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
  import AdBar from './components/adBar';

  export default {
    name: 'App',
    components: {HeaderMenu, FooterMenu, AdBar}
  }
</script>

<style lang="sass">
  #app
    font-family: 'Helvetica Neue', sans-serif
    font-weight: 500
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #838283

  @font-face
    font-family: 'Gilroy_bold'
    src: url('assets/gilroy_bold/gilroy_bold.woff2') format('woff2'),
    url('assets/gilroy_bold/gilroy_bold.ttf')  format('truetype'),
    url('assets/gilroy_bold/gilroy_bold.woff')  format('woff'),
    url('assets/gilroy_bold/gilroy_bold.eot')  format('eot')

  @font-face
    font-family: 'Gilroy'
    src: url('assets/gilroy_light/gilroy_light.woff2') format('woff2'),
    url('assets/gilroy_light/gilroy_light.ttf')  format('truetype'),
    url('assets/gilroy_light/gilroy_light.woff')  format('woff'),
    url('assets/gilroy_light/gilroy_light.eot')  format('eot')

  .fs-28
    font-size: 26px !important
    line-height: 24px

  .fs-16
    p, span, li, div, a
      font-size: 16px

  a:hover
    text-decoration: none

  .helvetica
    font-family: 'Helvetica Neue', sans-serif !important

  h1, h2
    font-size: 3rem
    font-family: 'Gilroy_bold', sans-serif !important
    line-height: 40px

  h3, h4, h5
    font-family: 'Gilroy', sans-serif !important

  p, span, li, div, a
    font-family: 'Helvetica Neue', sans-serif
    font-size: 18px
    font-weight: 400

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

  iframe
    width: 100%
    max-width: 615px
    height: 340px

  @media(max-width: 767px)
    .fs-28
      font-size: 20px !important
      line-height: 21px

  @media (max-width: 655px)
    iframe
      height: 250px
      width: 450px

  @media (max-width: 545px)
    iframe
      height: 160px
      width: 300px
</style>
