<template>
  <div>
    <div class="row hero_bg text-center pb-5 pt-5 font-white">
      <div class="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3 mb-5 mt-5">
        <h1 class="">Video services</h1>
        <p class="text-left helvetica pt-3">Trying to decide which type of video is right for your business? There are
          many different types of videos and each serve a different purpose.
          Check out the different types of video services that we offer below and
          get a sense of what each type is designed to do for your business.</p>
        <p class="text-left helvetica">If you’d like for us to review your business and recommend the type of
          video that would make the most impact and provide a free quote, click
          the “Get my free quote” button below and fill out the form.</p>
      </div>

      <div class="col-12">
        <router-link to="/contact">
          <button class="btn top-btn text-uppercase p-2 pr-4 pl-4 mt-1 font-white helvetica font-weight-regular"
                  style="font-size: 20px">get my free quote</button>
        </router-link>
      </div>
    </div>

    <div class="row pb-5 pt-5 font-blue">
      <div class="col-12 text-center">
        <h3 class="m-0" style="font-size: 3rem">Our process</h3>
      </div>
    </div>

    <div class="row sections">
      <div class="col-12">
        <div class="row">
          <div class="p-0 col-12 s_1_bg col-lg-5 col-xl-4">
            <img src="../assets/about/About_Us_Scriptwriting_Photo.png" alt="" class="img-fluid">
          </div>

          <div class="col-12 col-lg-7 col-xl-8 d-flex justify-content-center p-4 p-xl-5 flex-column align-items-start">
            <h4 class="font-blue">Strategy and scriptwriting</h4>
            <p>Here at Vidsuade we have a background in digital marketing and utilize
              our expertise to come up with a strategy to meet specific goals. We start
              with learning your industry and learning what makes your business stand out in that industry.
              Then we'll create a highly targeted call-to-action. Once we learn what your audience
              wants and why your solution makes sense we'll devise a persuasive script made
              specifically for your audience and leave them wanting your solution.</p>
          </div>
        </div>

        <div class="row">
          <div class="p-0 d-block d-lg-none col-12 col-lg-5 col-xl-4 text-right">
            <img src="../assets/about/About_Us_Preproduction_Photo.png" alt="" class="img-fluid">
          </div>

          <div class="col-12 col-lg-7 col-xl-8 d-flex justify-content-center p-4 p-xl-5 flex-column align-items-start">
            <h4 class="font-blue">Pre-production</h4>
            <p>After strategizing and creating a highly engaging and persuasive script, we'll
              storyboard and organize the shoot so that you'll know exactly what to expect. Don't worry we'll work with you so that you're happy
              with the direction of the video and that there aren't any surprises. We'll
              make sure that it's a smooth and seamless process.</p>
          </div>

          <div class="p-0 d-none d-lg-block col-12 col-lg-5 col-xl-4 text-right">
            <img src="../assets/about/About_Us_Preproduction_Photo.png" alt="" class="img-fluid">
          </div>
        </div>

        <div class="row">
          <div class="p-0 col-12 col-lg-5 col-xl-4">
            <img src="../assets/about/About_Us_Production_Photo.png" alt="" class="img-fluid">
          </div>

          <div class="col-12 col-lg-7 col-xl-8 d-flex justify-content-center p-4 p-xl-5 flex-column align-items-start">
            <h4 class="font-blue">Production</h4>
            <p>Depending on whether it's an animated or live-action video, we'll make sure it's of
              highest quality. When producing the video, we'll provide two revisions so that you're
              100% happy with the finished product. We'll even provide best practices when embedding
              the video on your website or landing pages to ensure the highest visibility possible.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row footer_section_bg justify-content-center align-items-center pt-5 pb-5 text-center flex-column">
      <h2 class="font-white">Want to get started?</h2>
      <router-link to="/contact">
        <button class="btn text-uppercase bg-white p-2 pr-4 pl-4 mt-3 font-blue helvetica font-weight-regular"
                style="font-size: 20px">get my free quote</button>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style lang="sass" scoped>
  .hero_bg
    background-image: url("../assets/about/About_Us_BG_Photo@2x.png")
    background-size: cover

  /*.s_1_bg*/
    /*background-image: url("../assets/about/About_Us_Scriptwriting_Photo.png")*/
    /*background-size: cover*/
    /*background-position: center*/
    /*background-repeat: no-repeat*/
    /*height: 300px*/

  .top-btn
    background: #E98000
    margin: auto

  .sections
    .row:nth-child(2n-1)
      background: #e9e9e9
    img
      width: 100%

  @media(max-width: 1400px)
    .sections
      p
        font-size: 15px

</style>
