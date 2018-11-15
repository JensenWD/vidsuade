<template>
  <div>
    <div class="row hero_bg text-center pt-5 font-white">
      <div class="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3 mt-5">
        <h1>Want to get more mobile app downloads?</h1>
        <h4 class="helvetica font-weight-light mt-2">We help mobile apps get noticed through video</h4>
      </div>

      <div class="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3 mt-3">
        <div class="row align-items-center justify-content-center">
          <input class="form-control header_input" type="text" placeholder="Enter your email">
          <button class="btn white-btn-outline">GET A QUOTE</button>
        </div>
      </div>

      <div class="col-12 col-md-10 offset-md-1">
        <img class="img-fluid" src="../../assets/landing_page3/App_Landing_Hero_BG@2x.png" alt="">
      </div>
    </div>

    <div class="row text-center position-relative pb-5 pt-5">
      <img class="img-fluid overlap1" src="../../assets/landing_page3/App_Landing_Struggle_Overlap_03_Shadow.png" alt="">
      <div class="container pb-5 pt-5">
        <h2 class="mt-2 mb-5 font-weight-light font-orange">The struggle is real.</h2>
        <div class="row">
          <div class="col-10 offset-1 col-lg-8 offset-lg-2">
            <p class="text-left">If you’ve developed mobile app before then you know how difficult it can
              be to get discovered. You’ve done everything right from researching
              keywords to having stellar reviews, but you’re still stuck with only having
              a handful of downloads. <br><br>It’s not easy getting discovered when the app market is so saturated. It
              starts to become a big blur of similar mobile apps. So how is it that you
              can stand out and create some separation? If only you could show
              people how great your app is and how it’s different from the competition.</p>
          </div>
        </div>
      </div>
      <img class="img-fluid img1" src="../../assets/landing_page3/App_Landing_Struggle_Illustration.png" alt="">
    </div>

    <div class="row text-center position-relative blue-bg pb-5 pt-5">
      <img class="img-fluid img2" src="../../assets/landing_page3/App_Landing_Downloads_Illustration.png" alt="">
      <div class="container pb-5 pt-5">
        <h2 class="mt-2 mb-5 font-weight-light font-white">The secret to more downloads</h2>
        <div class="row">
          <div class="col-10 offset-1 col-lg-8 offset-lg-2">
            <p class="text-left font-white">According to TUNE, mobile apps that include videos get higher ratings and
              ultimately more installs. App videos are are one of the most important
              elements of app listings. They can get people excited about your app and
              lead to an increase in downloads. Videos are the best conversion tool
              available and nothing can convince someone to download your app better
              than a video can. They are a great way to show people exactly what to
              expect when they download your app. - it’s no secret videos are key.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row text-center position-relative light-blue-bg pb-5 pt-5">
      <div class="container pb-5 pt-5">
        <h2 class="mt-2 mb-5 font-weight-light font-white">Need a video for your app?</h2>
      </div>
    </div>

    <div class="row text-center position-relative pb-5 pt-5">
      <img class="img-fluid overlap2" src="../../assets/landing_page3/App_Landing_Reviews_Overlap_03_Shadow.png" alt="">
      <div class="container pb-5 pt-5">
        <h2 class="mt-2 mb-5 font-weight-light font-white">Benefits of app videos:</h2>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "LandingPage3"
  }
</script>

<style lang="sass" scoped>
  .light-blue-bg
    background: #00a9e6
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2)

  .blue-bg
    background: #004F75
    box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2)

  .img1
    position: absolute
    z-index: 1
    bottom: -1px
    right: 0
    width: 18%

  .img2
    position: absolute
    z-index: 1
    bottom: -6px
    left: 45px
    width: 11%

  .overlap1
    position: absolute
    z-index: 1
    width: 29%
    left: -7px
    bottom: -9px

  .overlap2
    position: absolute
    z-index: 1
    width: 29%
    right: -7px
    top: -9px
    transform: rotate(180deg)

  .hero_bg
    background: linear-gradient(#009EE9, #004F75)
    height: 100%
    //max-height: 575px

  .header_input
    max-width: 340px
    border-radius: 25px
    height: 40px

  .white-btn-outline
    background: transparent
    color: white
    border: 3px solid white
    border-radius: 25px
    width: 170px
    margin-left: 20px
</style>
