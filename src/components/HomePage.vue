<template>
  <div>
    <div class="row hero_bg text-center pb-4 pt-5 font-white">
      <div class="col-12 mb-3 mt-5">
        <h1 class="">Videos that convert</h1>
        <h4 class="helvetica font-weight-light">Videos made to increase sales for business.</h4>
      </div>
      <div class="col-12">
        <button class="btn d-block m-auto d-md-none" type="button" id="iframewebpage" data-src="https://www.youtube.com/embed/s7Zaw7e6pY4">Watch video</button>
        <iframe class="d-none d-md-inline" src="https://www.youtube.com/embed/s7Zaw7e6pY4" frameborder="0"></iframe>
      </div>

      <div class="col-12">
        <div class="d-block d-md-none floating-btn m-0 pt-3">
          <router-link to="/contact">
            <button class="btn text-uppercase font-white">get my free quote</button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="row font-blue">

      <div class="position-absolute d-none d-md-block floating-btn">
        <router-link to="/contact">
          <button class="btn text-uppercase font-white">get my free quote</button>
        </router-link>
      </div>

      <div class="col-6 col-lg-3 col_section text-center">
        <a href="#/" data-toggle="modal" data-target="#socialMediaModal" class="font-blue learn-btn">
          <img src="../assets/home/Home_SocialMedia_Photo.png" class="img-fluid" alt="">
          <span>Social media videos</span>
        </a>
      </div>
      <div class="col-6 col-lg-3 col_section text-center">
        <a href="#/" data-toggle="modal" data-target="#salesProcessModal" class="font-blue learn-btn">
          <img src="../assets/home/Home_Sales_Process_Photo.png" class="img-fluid" alt="">
          <span>Sales process videos</span>
        </a>
      </div>
      <div class="col-6 col-lg-3 col_section text-center">
        <a href="#/" data-toggle="modal" data-target="#explainerModal" class="font-blue learn-btn">
          <img src="../assets/home/HomeExplainer_Photo.png" class="img-fluid" alt="">
          <span>Explainer videos</span>
        </a>
      </div>
      <div class="col-6 col-lg-3 col_section text-center">
        <a href="#/" data-toggle="modal" data-target="#testimonialModal" class="font-blue learn-btn">
          <img src="../assets/home/Home_Customer_Test_Photo.png" class="img-fluid" alt="">
          <span>Customer testimonials</span>
        </a>
      </div>
    </div>

    <div class="row section2_bg">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-2 text-center p-2 pt-5 pb-5 font-white">
            <h2 class="mt-2 mb-5 font-weight-light">Why video?</h2>
            <p class="text-left">Companies that are not utilizing videos as part of their marketing campaigns are going
              to be left behind.
              In today's market people want to do their own research and be in control of their buying decisions. 82% of
              people don't want to talk to a salesperson until after they're ready to buy. When people learn, they buy
              faster and
              since the brain processes video 60,000 times faster than text, people learn faster with video.</p>
            <br>
            <p class="text-left">Adding videos to your website makes your site 6X more likely to convert visitors into
              paying customers and since the average user spends 88% more time on a website with video, then you're at a
              disadvantage if you're not leveraging the power of video on your website.</p>
            <span><router-link to="/why-video" class="font-white text-underline">Learn more</router-link></span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-2 text-center p-2 pt-5 pb-5">
            <h2 class="mt-2 mb-5 font-weight-light font-blue">Video marketing anyone?</h2>
            <p class="text-left">Here at Vidsuade we don't just provide a "pretty" video for your friends
              and family to be proud of, we hand-craft tactical videos meant to convince and
              convert and increase your sales.</p>
            <p class="text-left">A well produced video isn't enough, but combined with a marketing
              strategy and a clear call-to-action we'll help you get more business. Why
              waste money on videos that don't generate ROI or increase conversions?</p>
            <p class="text-left">With a background in digital marketing and video production we make
              sure to get to know your industry and what your demographic really wants. We
              spend time to learn what makes your business stand out and through the power of video
              we persuade or "Vidsuade" your audience and guide them towards your solution.</p>
            <p class="text-left">Whether you want to engage your audience on social media, drive
              organic traffic to your website, increase lead-to-sale conversion rates, or all of
              the above, we'll help you achieve your goals. Want a free quote? <router-link to="/contact" class="font-orange text-underline">Click here</router-link></p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container">
        <div class="row pt-sm-4 pb-5">
          <div class="col-12 col-md-8 offset-md-2 text-center p-2">
            <h2 class="mt-2 mb-5 font-weight-light font-blue">How we operate</h2>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="row">
                  <div class="col-12 col-md-3 p-3 icon">
                    <img src="../assets/home/Strategy_Icon.png" class="img-fluid" alt="">
                  </div>
                  <div class="col-12 col-md-9">
                    <h3 class="font-orange font-weight-regular">Strategy</h3>
                    <p>Here at Vidsuade we have a background in digital marketing and we utilize our expertise
                    to come up with a strategy to meet specific goals. We start with learning your industry and learning
                    what makes your business stand out in that industry. Then we'll create a
                    highly targeted call-to-action.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="row">
                  <div class="col-12 col-md-3 p-3 icon">
                    <img src="../assets/home/script_Icon.png" class="img-fluid" alt="">
                  </div>
                  <div class="col-12 col-md-9">
                    <h3 class="font-orange font-weight-regular">Scriptwriting</h3>
                    <p>Once we learn what your audience wants and why your solution makes sense we'll devise a
                    persuasive script made specifically for your audience and leave them wanting your solution.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 mt-0 mt-md-4">
                <div class="row">
                  <div class="col-12 col-md-3 p-3 icon">
                    <img src="../assets/home/Preproduction_Icon.png" class="img-fluid" alt="">
                  </div>
                  <div class="col-12 col-md-9">
                    <h3 class="font-orange font-weight-regular">Pre-Production</h3>
                    <p>After strategizing and creating a highly engaging and persuasive script, we'll
                    storyboard and organize the shoot so that you'll know exactly what to expect. Don't worry
                    we'll work with you so that you're happy with the direction of the video and that
                    there aren't any surprises.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 mt-0 mt-md-4">
                <div class="row">
                  <div class="col-12 col-md-3 p-3 icon">
                    <img src="../assets/home/Production_Icon.png" class="img-fluid" alt="">
                  </div>
                  <div class="col-12 col-md-9">
                    <h3 class="font-orange font-weight-regular">Production</h3>
                    <p>Depending on whether it's an animated or live-action video, we'll make sure it's of highest
                    quality. When producing the video, we'll provide two revisions so that you're 100% happy
                    with the finished product.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row footer_section_bg justify-content-center align-items-center pt-5 pb-5 text-center flex-column">
      <h2 class="font-white">Want to get started?</h2>
      <router-link to="/contact">
        <button class="btn text-uppercase p-2 pr-4 pl-4 mt-3 bg-white font-blue helvetica font-weight-regular"
                style="font-size: 20px">get my free quote</button>
      </router-link>
    </div>

    <modals></modals>
  </div>
</template>

<script>
  import Modals from './PricingModals';

  export default {
    name: "HomePage",
    components: {Modals},
    mounted() {
      $("#iframewebpage").click(function(){
        $(this).replaceWith("<iframe class='col-12 d-block d-md-none' src="+$(this).data('src')+"></iframe>");
        $("iframe").attr({
          allowfullscreen: "true",
          frameborder:"0"
        });
      });
    }
  }
</script>

<style lang="sass" scoped>
  #iframewebpage
    background-color: #D98430
    color: white
    padding: 0.35rem 1.2rem
  .hero_bg
    background-image: url("../assets/home/Home_Hero_Photo.png")
    background-size: cover
  .section2_bg
    background-image: url("../assets/home/Home_Why_Video_Photo.png")
    background-size: cover
  .col_section:not(:last-child)
    border-right: 1px solid #b0b0b0
  .col_section
    display: flex
    padding: 0
    a
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      span
        position: absolute
        text-transform: uppercase
  .icon
    display: flex
    justify-content: center
    align-items: center

  .floating-btn
    z-index: 100
    left: 50%
    margin-left: -140px
    margin-top: -20px
    button
      width: 280px
      border: 5px solid white
      border-radius: 9px
      background-color: #D98430
      font-size: 1.4rem

  @media(max-width: 768px)
    .col_section
      span
        font-size: 12px

    .floating-btn
      margin-left: -100px
      button
        width: 200px
        background-color: white
        border: none
        color: #009EE9
        font-size: 1rem
</style>
