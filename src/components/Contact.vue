<template>
    <div>
        <div class="row hero_bg text-center pb-5 pt-5 font-white">
            <div class="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3 mb-5 mt-4">
                <h1 class="font-weight-bold helvetica">Contact us</h1>
                <span class="fs-28">Interested in working with us or learning more about our services? Fill out the form below and we'll get back to you. We look forward to hearing from you!</span>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3 mb-5 mt-4">
                        <form action="https://vidsuade.us19.list-manage.com/subscribe/post?u=7d806f4aca6ff21bfdac2d34e&amp;id=e14deaa743"
                              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                              class="bg-white p-5 font-grey" target="_blank">

                            <div class="row">
                                <div class="col-6 p-1">
                                    <div class="form-group">
                                        <input type="text" value="" required name="FNAME" class="form-control"
                                               placeholder="First name"
                                               id="mce-FNAME">
                                    </div>
                                </div>
                                <div class="col-6 p-1">
                                    <div class="form-group">
                                        <input type="text" value="" required name="LNAME" class="form-control"
                                               placeholder="Last name"
                                               id="mce-LNAME">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6 p-1">
                                    <div class="form-group">
                                        <input type="text" value="" name="MMERGE5" class="form-control"
                                               placeholder="Company"
                                               id="mce-MMERGE5">
                                    </div>
                                </div>
                                <div class="col-6 p-1">
                                    <div class="form-group">
                                        <select name="MMERGE7" class="form-control" id="mce-MMERGE7">
                                            <option selected disabled value="">Interested in:</option>
                                            <option value="Social media">Social media</option>
                                            <option value="Sales process">Sales process</option>
                                            <option value="Testimonial">Testimonial</option>
                                            <option value="Explainer">Explainer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 p-1">
                                    <div class="form-group">
                                        <input type="text" name="PHONE" placeholder="Phone number" class="form-control"
                                               value="" id="mce-PHONE">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 p-1">
                                    <div class="form-group">
                                        <input type="email" value="" required name="EMAIL" class="required form-control"
                                               placeholder="Email"
                                               id="mce-EMAIL">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 p-1">
                                    <div class="form-group">
                        <textarea type="text" rows="5" value="" name="MMERGE6" required class="form-control" placeholder="Message"
                                  id="mce-MMERGE6"></textarea>
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
                                                I agree to the <router-link to="/terms" class="font-grey text-underline">terms and conditions</router-link>
                                            </label>
                                        </div>
                                    </div>
                                    <div id="mce-responses" class="clear">
                                        <div class="response" id="mce-error-response" style="display:none"></div>
                                        <div class="response" id="mce-success-response" style="display:none"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                <input type="text" name="b_7d806f4aca6ff21bfdac2d34e_e14deaa743" tabindex="-1" value="">
                            </div>
                            <div class="col-12">
                                <button type="submit"
                                        class="btn text-uppercase p-2 pr-4 pl-4 mt-3 font-white helvetica submit font-weight-regular">Send</button>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <router-link class="font-grey text-underline" to="/privacy-policy" style="font-size: 14px"><i>Privacy Policy</i></router-link>
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
        name: "Contact"
    }
</script>

<style lang="sass" scoped>
    .hero_bg
        background-image: url("../assets/contact/Contact_US_BG@2x.png")
        background-size: cover
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

