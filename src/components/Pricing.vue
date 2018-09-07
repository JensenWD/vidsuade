<template>
  <div>
    <div class="row hero_bg text-center pt-5 font-white">
      <div class="col-12 mb-5 mt-5">
        <h1 class="">Pricing</h1>
        <span class="fs-28 helvetica font-weight-light">Find out which tactical video you need below.</span>
      </div>
    </div>

    <div class="row text-center justify-content-center">
      <div class="container pricing_tables_wrapper">
        <div class="row">

          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card h-100">

              <div class="card-block fs-16">
                <h4 class="card-title">Social media <br class="d-none d-xl-block"> spots</h4>
                <div>
                  <span class="price font-grey">$500-$1k</span>
                </div>
                <router-link to="/contact"><button class="btn font-white">Get my quote</button></router-link>
                <p class="font-grey">Showcase your brand in a creative way. This is the best to create engagement on
                  social media
                  posts.</p>
                <span class="font-grey font-weight-bold">What you'll get:</span>
                <ul class="font-grey text-left m-0 pl-2">
                  <li>(3) 10-30 second videos</li>
                  <li>Motion graphics</li>
                  <li>Delivery of each video in the appropriate format for each of your social channels</li>
                </ul>

                <a href="#/" data-toggle="modal" data-target="#socialMediaModal" class="font-blue learn-btn">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card h-100">

              <div class="card-block fs-16">
                <h4 class="card-title">Sales process <br class="d-none d-xl-block"> videos</h4>
                <div>
                  <span class="price font-grey">$2k-$8k</span>
                </div>
                <router-link to="/contact"><button class="btn font-white">Get my quote</button></router-link>
                <p class="font-grey">Let your website answer all of your customers' questions and shorten your sales cycle.</p>
                <span class="font-grey font-weight-bold">What you'll get:</span>
                <ul class="font-grey text-left m-0 pl-2">
                  <li>Scripts written by professional copywriters</li>
                  <li>Professional 4k HD video</li>
                  <li>Highly targeted call-to-action & marketing strategy</li>
                </ul>

                <a href="#/" data-toggle="modal" data-target="#salesProcessModal" class="font-blue learn-btn">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card h-100">

              <div class="card-block fs-16">
                <h4 class="card-title">Testimonial <br class="d-none d-xl-block"> videos</h4>
                <div>
                  <span class="price font-grey">$5k-$10k</span>
                </div>
                <router-link to="/contact"><button class="btn font-white">Get my quote</button></router-link>
                <p class="font-grey">Provides social proof and establishes trust with your company. Highly effective at converting leads.</p>
                <span class="font-grey font-weight-bold">What you'll get:</span>
                <ul class="font-grey text-left m-0 pl-2">
                  <li>Questions written to evoke a story</li>
                  <li>Professional 4k HD video</li>
                  <li>Highly targeted call-to-action & marketing strategy</li>
                </ul>

                <a href="#/" data-toggle="modal" data-target="#testimonialModal" class="font-blue learn-btn">Learn more</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-xl-3">
            <div class="card h-100">

              <div class="card-block fs-16">
                <h4 class="card-title">Explainer <br class="d-none d-xl-block"> videos</h4>
                <div>
                  <span class="price font-grey">$8k-$15k</span>
                </div>
                <router-link to="/contact"><button class="btn font-white">Get my quote</button></router-link>
                <p class="font-grey">Presents viewers with their problem and provides them with your solution. Highly effective at capturing leads.</p>
                <span class="font-grey font-weight-bold">What you'll get:</span>
                <ul class="font-grey text-left m-0 pl-2">
                  <li>Scripts written by professional copywriters</li>
                  <li>Professional 4k HD video</li>
                  <li>Highly targeted call-to-action & marketing strategy</li>
                </ul>

                <a href="#/" data-toggle="modal" data-target="#explainerModal" class="font-blue learn-btn">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row table_separator text-center mt-4 mb-4">
      <div class="col-12"><span class="large font-blue">- or -</span></div>
    </div>

    <div class="row justify-content-center mt-3">
      <div class="container custom_package">
        <div class="row">
          <div class="d-none d-lg-block col-lg-5 bg-img pr-0">
          </div>
          <div class="col-12 col-lg-7 p-3 pl-4">
            <h3 class="font-blue helvetica font-weight-bold">Custom package</h3>
            <p>Need a combination of videos? Or maybe you need an entire funnel process of videos? If you do, you'll enjoy a discounted rate. Let's chat about your specific needs.</p>
            <router-link to="/contact"><button class="btn font-white">Get my quote</button></router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 text-center p-5 lower-mid-section">
        <span class="font-weight-bold large-text">Is the video service you're looking for not on the list?</span> <br>
        <span class="medium-text">Let us know what you need and we'll get back to you.</span>
        <br>
        <router-link to="/contact">
          <button class="btn font-white mt-4">CONTACT US</button>
        </router-link>
      </div>
    </div>

    <div class="row justify-content-center mt-2">
     <div class="col-12">
       <h2 class="text-center helvetica font-weight-light">Frequently asked questions</h2>
     </div>

      <div class="container mt-4 mb-4">
        <div id="faq" role="tablist" aria-multiselectable="true">

          <div class="card">
            <div class="card-header" role="tab" id="section1HeaderId">
              <h5 class="mb-0">
                <a data-toggle="collapse" data-parent="#faq" href="#section1ContentId" aria-expanded="true"
                   aria-controls="section1ContentId">
                  <div class="blue-btn"><span>+</span></div>
                  Does it really make a difference having video marketers making our videos?
                </a>
              </h5>
            </div>
            <div id="section1ContentId" class="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
              <div class="card-block">
                <p>Yes. Hiring a videographer or a video agency to make cool videos for you is always an option, but if you want sale-driven videos with ROI as the main objective, then you need a team with digital marketing experience to handle your video production.</p>
                <p>Here at Vidsuade ROI is our goal and our copywriters that are experienced at producing ROI-driven scripts will tailor each message to convince and convert your specific demographic. We also have experienced designers, videographers and award winning video editors.</p>
                <p>When your business's time and money is on the line, might as well avoid having to continuously re-do your video and get the video done right the first time by hiring an experienced team.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" role="tab" id="section2">
              <h5 class="mb-0">
                <a data-toggle="collapse" data-parent="#faq" href="#section2Content" aria-expanded="true"
                   aria-controls="section2Content">
                  <div class="blue-btn"><span>+</span></div>
                  What industries can benefit from having video?
                </a>
              </h5>
            </div>
            <div id="section2Content" class="collapse in" role="tabpanel" aria-labelledby="section2">
              <div class="card-block">
                The power of video works across all industries. The human brain still processes video 60,000 times faster than text and embedding videos on a landing page still increases conversions by 80% no matter the industry.
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" role="tab" id="section3">
              <h5 class="mb-0">
                <a data-toggle="collapse" data-parent="#faq" href="#section3Content" aria-expanded="true"
                   aria-controls="section3Content">
                  <div class="blue-btn"><span>+</span></div>
                  Can I just create my own videos?
                </a>
              </h5>
            </div>
            <div id="section3Content" class="collapse in" role="tabpanel" aria-labelledby="section3">
              <div class="card-block">
                <p> Of course! We actually encourage you to try and create your own videos. We still recommend hiring
                  video marketers like us who are experienced at producing ROI-driven videos. We are seasoned at
                  persuading audiences through video, a term we like to call "Vidsuading".</p>
              <p>But we get it. Not all businesses have the budget to have us create all of their videos, so that's why we created a free guide on how businesses can create their own videos on a shoe-string budget called "How to create professional quality videos with less than $250 even if you don't have any equipement or space". We highly recommend checking it out. You can download our guide for FREE by
                <a class="font-orange text-underline" href="">clicking here.</a></p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" role="tab" id="section4">
              <h5 class="mb-0">
                <a data-toggle="collapse" data-parent="#faq" href="#section4Content" aria-expanded="true"
                   aria-controls="section4Content">
                  <div class="blue-btn"><span>+</span></div>
                  What's the turnaround time on a video?
                </a>
              </h5>
            </div>
            <div id="section4Content" class="collapse in" role="tabpanel" aria-labelledby="section4">
              <div class="card-block">
                <p>Typically our turnaround time is between 4-6 weeks from contract to finished product. We have time
                  built in to research your company and industry and also allow time for revisions to make sure we get
                  your video just right. Your compliance and timeliness with feedback also contributes to turnaround
                  time. The quicker we get your feedback, the quicker we can finalize any revisions and deliver the
                  final product.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" role="tab" id="section5">
              <h5 class="mb-0">
                <a data-toggle="collapse" data-parent="#faq" href="#section5Content" aria-expanded="true"
                   aria-controls="section5Content">
                  <div class="blue-btn"><span>+</span></div>
                  How much time is my company involved in the process?
                </a>
              </h5>
            </div>
            <div id="section5Content" class="collapse in" role="tabpanel" aria-labelledby="section5">
              <div class="card-block">
                <p>This varies by the scope of the project. Simple videos such as social media spots and testimonial
                  videos won't require much of your time at all. More in-depth videos such as explainer videos will
                  require a few hours before writing a script to better understand your company/industry, a few hours
                  for on-site production, and possibly a couple hours for any feedback or revisions. Again, it depends
                  on the scope of the project, so we recommend contacting us if you have any further questions.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" role="tab" id="section6">
              <h5 class="mb-0">
                <a data-toggle="collapse" data-parent="#faq" href="#section6Content" aria-expanded="true"
                   aria-controls="section6Content">
                  <div class="blue-btn"><span>+</span></div>
                What if I want to revise the script or video?
                </a>
              </h5>
            </div>
            <div id="section6Content" class="collapse in" role="tabpanel" aria-labelledby="section6">
              <div class="card-block">
                <p>With every video we allow for two revisions of the script and two revisions of the final video. If
                  you still require revisions we will provide an estimate and bill you at an hourly rate of $100.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" role="tab" id="section7">
              <h5 class="mb-0">
                <a data-toggle="collapse" data-parent="#faq" href="#section7Content" aria-expanded="true"
                   aria-controls="section7Content">
                  <div class="blue-btn"><span>+</span></div>
                  If I'm not happy with the end result, can I get a refund?
                </a>
              </h5>
            </div>
            <div id="section7Content" class="collapse in" role="tabpanel" aria-labelledby="section7">
              <div class="card-block">
              <p>If for whatever reaason you are not satisfied with your final video, we will work with you to try and make it right.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" role="tab" id="section8">
              <h5 class="mb-0">
                <a data-toggle="collapse" data-parent="#faq" href="#section8Content" aria-expanded="true"
                   aria-controls="section8Content">
                  <div class="blue-btn"><span>+</span></div>
                How can I get started?
                </a>
              </h5>
            </div>
            <div id="section8Content" class="collapse in" role="tabpanel" aria-labelledby="section8">
              <div class="card-block">
              <p>To get started just fill out our contact form and someone will reach out to you. You can fill out the form
                <router-link class="font-orange text-underline" to="/contact">here.</router-link></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <modals></modals>
  </div>
</template>

<script>
  import Modals from './PricingModals';

  export default {
    name: "Pricing",
    components: {Modals}
  }
</script>

<style lang="sass" scoped>
  .hero_bg
    background-image: url("../assets/pricing/Pricing_Hero_Photo.png")
    background-size: cover
    padding-bottom: 500px

  .pricing_tables_wrapper
    top: 0
    position: static
    margin-top: -500px
    .card
      border-radius: 0
      padding: 1.5rem 1.75rem
      box-shadow: 0 2px 5px #b7b7b7
      .card-title
        color: #009EE9
      .price
        font-size: 2.2rem
      p
        text-align: left
        line-height: 20px
      button
        background: #E98000
        border-radius: 2px
        padding: 0.5rem 1.25rem
        margin: 1rem auto
      .learn-btn
        text-decoration: underline
        font-style: italic
      ul
        margin-bottom: 0.75rem !important

  .large
    font-size: 3.4rem
    font-style: italic

  .custom_package
    box-shadow: 0 2px 5px #b7b7b7
    background: white
    max-width: 800px
    p
      font-size: 16px
      line-height: 20px
    button
      background: #E98000
      border-radius: 2px
      padding: 0.5rem 1.25rem
      margin: 1rem auto
    .bg-img
      background-image: url('../assets/pricing/Custom_Package_Photo.png')
      background-size: cover
      background-repeat: no-repeat
      height: 245px

  .large-text
    font-size: 1.7rem

  .medium-text
    font-size: 1.4rem

  .lower-mid-section
    button
      background: #009EE9
      border-radius: 9px
      padding: 0.6rem 2.95rem
      margin: 1rem auto
      font-size: 1.4rem
      font-weight: 600
      box-shadow: 0 2px 5px #b7b7b7

  .blue-btn
    float: left
    width: 50px
    height: 50px
    background: #009EE9
    color: white
    text-align: center
    padding: 0 0.9rem
    margin-right: 0.9rem
    span
      font-size: 2.3rem

  #faq
    .card
      box-shadow: none
      border: none
      padding: 0.5rem 2rem
    .card-header
      padding: 0
      background: #E6E7E8
      a
        display: flex
        justify-content: flex-start
        align-items: center
        color: #838283
        font-size: 16px
      a:hover
        text-decoration: none
    .card-block
      max-width: 900px
      margin: auto
      padding-top: 1.25rem

  @media(max-width: 1200px)
    .pricing_tables_wrapper
      >.row
        > .col-12
          margin-top: 1rem

  @media(max-width: 991px)
    .table_separator
      margin-top: 0px
    .custom_package
      p
        font-size: 14px

  @media(max-width: 767px)
    #faq
      .card-header
        a
          font-size: 12px
</style>
