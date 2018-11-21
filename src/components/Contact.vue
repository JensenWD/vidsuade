<template>
  <div>
    <div class="row hero_bg text-center pb-5 pt-5 font-white">
      <div class="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3 mb-5 mt-5">
        <h1 class="">Contact us</h1>
        <div class="mt-4">
          <span class="fs-28 helvetica font-weight-light">To get a free quote or if you're interested in learning more about our services, fill out the form below and we'll get back to you. We look forward to hearing from you!</span>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3 mb-5 mt-4">
            <form @submit="formResponse"
                  id="contact"
                  action="https://forms.hubspot.com/uploads/form/v2/4845111/73f81894-f196-4812-a1b7-c57845dd123f"
                  method="post" class="bg-white p-5 font-grey">

              <div id="thanksResponse" class="text-center d-none w-100">
                <p>Thanks for filling out our form!</p>
                <p>We will get back to you as soon as we can.</p>
              </div>

              <div class="row">
                <div class="col-6 p-1">
                  <div class="form-group">
                    <input type="text" value="" required name="firstname" class="form-control"
                           placeholder="First name">
                  </div>
                </div>
                <div class="col-6 p-1">
                  <div class="form-group">
                    <input type="text" value="" required name="lastname" class="form-control"
                           placeholder="Last name">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-6 p-1">
                  <div class="form-group">
                    <input type="text" value="" required name="company" class="form-control"
                           placeholder="Company">
                  </div>
                </div>
                <div class="col-6 p-1">
                  <div class="form-group">
                    <input type="text" name="phone" required placeholder="Phone number" class="form-control"
                           value="">
                  </div>
                </div>
                <!--<div class="col-6 p-1">-->
                <!--<div class="form-group">-->
                <!--<select name="MMERGE7" class="form-control" id="mce-MMERGE7">-->
                <!--<option selected disabled value="">Interested in:</option>-->
                <!--<option value="Social media">Social media</option>-->
                <!--<option value="Sales process">Sales process</option>-->
                <!--<option value="Testimonial">Testimonial</option>-->
                <!--<option value="Explainer">Explainer</option>-->
                <!--<option value="Other">Other</option>-->
                <!--</select>-->
                <!--</div>-->
                <!--</div>-->
              </div>

              <div class="row">
                <div class="col-12 p-1">
                  <div class="form-group">
                    <input type="email" value="" required name="email" class="required form-control"
                           placeholder="Email">
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12 p-1">
                  <div class="form-group">
                    <textarea type="text" rows="5" value="" name="message" required class="form-control"
                              placeholder="Message"></textarea>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <div class="form-check">
                      <label class="form-check-label float-left">
                        <input type="checkbox" class="form-check-input" required value="checkedValue"
                               checked>
                        I agree to the
                        <router-link to="/terms" class="font-grey text-underline">terms and conditions</router-link>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <button type="submit"
                          class="btn text-uppercase p-2 pr-4 pl-4 mt-3 font-white helvetica submit font-weight-regular">
                    Send
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <router-link class="font-grey text-underline" to="/privacy-policy" style="font-size: 14px"><i>Privacy
                    Policy</i></router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Contact",
    methods: {
      formResponse() {
       $(document).ready(function () {
         $('#contact .row').each(function () {
           $(this).addClass('d-none');
         });

         $('#thanksResponse').removeClass('d-none');
       })
      },
      getUrlParams(prop) {
        var params = {};
        var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
        var definitions = search.split('&');

        definitions.forEach(function (val, key) {
          var parts = val.split('=', 2);
          params[parts[0]] = parts[1];
        });

        return (prop && prop in params) ? params[prop] : params;
      }
    },
    created() {
      if(this.getUrlParams('thanks') == 1)
        this.formResponse();
    }
  }
</script>

<style lang="sass" scoped>
    .hero_bg
        background-image: url("../assets/contact/Contact_US_BG.png")
        background-size: cover
        min-height: 100vh
    .submit
        background: #E98000
        border-radius: 5px
        padding: 0.5rem
        width: 100%
        max-width: 200px
        margin: 1rem auto
        border: none
    .form-group
        margin-bottom: 2px
</style>

