<template>
  <div class="col-12 bar bg-white">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 text-center lh">
          <span class="font-orange">Download</span> <span> our</span> <span class="font-orange"> FREE</span>
          <span> guide on how to create videos yourself on a budget</span>
          <button class="btn mt-2 mt-md-0">Download Guide</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "adBar"
  }
</script>

<style lang="sass" scoped>
  .lh
    line-height: 17px

  .bar
    height: auto
    padding: 0.5rem
    span
      font-weight: 700

  button
    background: #E98000
    color: white
    padding: 0 1rem
    height: 28px
    margin: 0 0 0 1rem

  @media(max-width: 991px)
      button
        height: 28px
        margin: 0 0 0 1rem

  @media (max-width: 767px)
    .bar
      span
        font-size: 14px
        line-height: 10px
</style>
