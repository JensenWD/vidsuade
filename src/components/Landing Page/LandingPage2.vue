<template>
    <div class="landing">
        <div class="row hero_bg pb-5 pt-5">
            <div class="col-12 header-content">
                <h1 class="title">Get your logo animated</h1>
                <p class="sub-title">spice up your promotional videos by using an animated version on your logo</p>
            </div>
            <div class="wistia_responsive_padding d-none col-12 d-md-block video">
                <div class="wistia_responsive_wrapper" style="height:100%;left:0;top:0;width:100%;">
                    <div class="wistia_embed wistia_async_umpfww7vro videoFoam=true" style="height:100%;position:relative;width:100%">
                        <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                            <img src="https://fast.wistia.com/embed/medias/umpfww7vro/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" onload="this.parentNode.style.opacity=1;" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row offer_section">

            <div class="col-12">
                <button class="btn d-block d-md-none m-auto" type="button" id="iframewebpage"
                        data-src="https://www.youtube.com/embed/FjA0j_zmfRw?rel=0&amp;showinfo=0">Watch Video
                </button>
            </div>

            <div class="col-md-6 col-xs-12" id="form">
                <form id="hub-form" action="https://forms.hubspot.com/uploads/form/v2/4845111/99f503ab-866f-46c6-8469-dc19f0abf543" method="POST">
                    <p class="mt-3" style="font-size: 22px">Get your logo animated!</p>
                    <p><strong>Where should we send your animation?*</strong></p>
                    <div class="row ml-1 mr-1 mb-2 mt-2">
                        <input class="col-lg-6 col-xs-12 fn" type="text" name="firstname" placeholder="First Name">
                        <input class="col-lg-6 col-xs-12 ln" type="text" name="lastname" placeholder="Last Name">
                    </div>
                    <div class="row ml-1 mr-1 mb-2 mt-2">
                        <input class="col-12" type="email" placeholder="Email" id="email" name="email"
                               style="width: 100%;">
                    </div>
                    <div class="row ml-1 mr-1 mb-2 mt-2">
                        <input class="col-12" type="email" placeholder="Confirm Email" id="cemail" style="width: 100%;">
                    </div>
                    <div class="row ml-1 mr-1 mb-2 mt-2">
                        <input class="col-12" type="text" placeholder="Phone Number" id="phone" name="phone" style="width: 100%;">
                    </div>
                </form>
                <p><strong style="font-size: 14px;">Upload your logo* </strong>
                    <span style="font-size: 10px;">(Vector file preferred - 25mb max file size)
             </span>
                </p>
                <div class="drag-box">
                    Drop your files here
                </div>
                <input type="file" class="hidden" id="browse-files">
                <span class="browse mt-2 mb-4" @click="browse">+</span><span class="mb-4 mt-2 filename" @click="browse">Click to choose a file instead</span>
                <p class=""><strong>Submit payment*</strong></p>
                <form action="/charge" method="post" id="payment-form">
                    <div class="form-row">
                        <!--<label for="card-element">-->
                        <!--Credit or debit card-->
                        <!--</label>-->
                        <div class="col-12" id="card-element">
                            <!-- A Stripe Element will be inserted here. -->
                        </div>

                        <!-- Used to display form errors. -->
                        <div style="margin: auto;" class="hidden mt-3 alert alert-danger" id="card-errors" role="alert"></div>
                    </div>
                    <div class="mt-3 text-center"><span style="font-size: 24px;"><strong>Total: $199.99</strong></span></div>
                    <button class="submit pt-1 pb-1 text-center mt-4">Submit Payment</button>
                </form>
                <span class="d-block mt-3 pb-3 text-center" style="color: #888788;font-size: 12px;">By clicking above, you agree to our <router-link class="privacy text-center mt-1 mb-2" to="/privacy-policy">Privacy Policy</router-link></span>
            </div>

            <div class="col-md-6 col-xs-12 what_you_get">
                <span class="section-heading mb-4" style="display: block;">What you'll get</span>
                <div class="row mt-3">
                    <div class="col-1 pr-3">
                        <img class="checkmark" src="../../assets/landing/Check_Mark.png" alt="">
                    </div>
                    <div class="col-11 pl-4 procon-text">
                        <span class="proscons">Up to a 5-second full HD 1080p 2D animation of your logo in .mov and .mp4 formats</span>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-1 pr-3 ">
                        <img class="checkmark" src="../../assets/landing/Check_Mark.png" alt="">
                    </div>
                    <div class="col-11 pl-4 procon-text">
                        <span class="proscons">Fully animated logo with sound effects/music</span>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-1 pr-3">
                        <img class="checkmark" src="../../assets/landing/Check_Mark.png" alt="">
                    </div>
                    <div class="col-11 pl-4 procon-text">
                        <span class="proscons">Quick turn-around (3-5 business days)</span>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-1 pr-3">
                        <img class="checkmark" src="../../assets/landing/X_Icon.png" alt="">
                    </div>
                    <div class="col-11 pl-4 procon-text">
                        <span class="proscons">A video you won’t be proud of</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row long_text mt-5">
            <div class="col-12 section-heading">
                Why companies need<br>animated logos
            </div>
        </div>
        <div class="row long_text mt-5">
            <div class="col-12">
                    Your logo is one of your most important brand assets as it is one of your most used assets
                    in marketing and usually one of the first interactions your new customers have with your
                    company. Do you know the old saying “the first impression is the last impression”? That
                    holds true especially today with the amount of competition growing and attention span
                    decreasing every day. With the average attention span being 6 seconds, leaving a memorable
                    first impression is priceless. You want your customers’ first impression or interaction with your
                    company to be a positive one.
                    <br><br>
                    An animated logo is a modern and dynamic way to present a brand. It can show a company
                    character and transfer a certain message attracting clients. Since your logo is usually the first
                    interaction that your customers will have with your brand you want to make sure that you stand
                    apart from the competition and having an animated logo will help not only help you stand out,
                    but also add a level of professionalism that will establish trust.
                    <br><br>
                <div class="looping-gif">
                    <img src="https://media.giphy.com/media/9ryMxorWGBVAdmOrF3/giphy.gif">
                </div>
                <br>
                <strong>Here are the 3 advantages of having an animated logo:</strong>
                <br><br>
                1. <strong>Higher brand awareness -</strong> Video increases brand awareness and recognition. Having
                an
                animated logo creates a memorable image in the minds of your customers by making your
                brand come to life through color, sound, and motion. Animated logos increases the chances
                of memorizing your brand compared to a short glance at the static image.
                <br><br>
                2. <strong>Stand apart from the competition -</strong> Animated logos are a secret weapon for brands
                wanting to come across as fresh, forward thinking, and original. Considering the overload of
                content and information users are presented with everyday, keeping the short attention span
                of your target audience is tough. However, having an animated logo will help you stand apart
                from the competition.
                <br><br>
                3. <strong>Added level professionalism -</strong> Animated logos are trending and even the largest
                companies
                such as Google and Amazon have invested in animated logos. Experts understand the
                importance of staying on top of trends and when brands show that they can keep up with the
                innovations, it adds a higher level of professionalism. Users pick up when companies invest in
                their branding and continually build on strengthening their relationship with their customers.
            </div>
        </div>
        <div class="row long_text mt-4">
            <div class="col-xl-6 col-lg-12 looping-gif">
                <img src="https://media.giphy.com/media/5towk7UXRZh4p1LqqI/giphy.gif" alt="">
            </div>
        </div>
        <div class="row long_text mt-5">
            <div class="col-12 section-heading">
                Where to use your<br>animated logo
            </div>
        </div>
        <div class="row long_text mt-5">
            <div class="col-12">
                <p>
                    1. <strong>Intro/outro in your videos -</strong> add your animated logo to any video content you’re
                    putting out,
                    using your animated logo as an intro builds brand recognition and adds professionalism. Use it as
                    an outro to serve as a call to action that sends viewers to your website.
                    <br><br>
                    2. <strong>Social media -</strong> post it on social media and show off your logo. Since most social
                    media videos
                    auto play It’s a great attention-grabber that’s sure to make your followers stop and pay attention
                    when scrolling through their feed.
                    <br><br>
                    3. <strong>Non-looping GIF on website -</strong> The best place for this is the header logo. It
                    plays through once
                    and stops. It’s eye catching and unique, but it’s not distracting because it stops after playing
                    through once.
                </p>
            </div>
        </div>
        <div class="row testimonial text-center pt-5 mt-5 pb-3 mb-5">
            <div class="col-12">
                <p>“Vidsuade’s talent extends far beyond creating unique designs and animations.
                    Their consultative approach to truly understand our brand has instilled trust
                    in my agency to keep coming back for more! I highly recommend Vidsuade.”</p>
                <br>
                <p>- Garrett Seiger<br>
                    President of Pirate Labs</p>
            </div>
        </div>
        <div class="row guarantee mb-5">
            <div class="col-md-4 col-sm-12 guarantee-title">
                100% money-back
                guarantee
            </div>
            <div class="col-12 guarantee-content mt-3">
                If for some reason you are not satisfied with your animated logo, we’ll work with you until
                you’re happy with your animation, but if we still can’t satisfy you we’ll refund your money and
                you’ll even get to keep your animated logo. What’s not to love? 75% discount and a
                money-back guarantee! What are you waiting for?
            </div>
            <div class="col-12 mt-5">
                <a href="#form" class="cta">Animate my logo</a>
            </div>
        </div>
    </div>
</template>

<script>
    let stripe = Stripe(`pk_live_7HadDMWhvzW6moMjkYdjbHdA`),
        elements = stripe.elements(),
        card = undefined;
    import axios from 'axios';

    export default {
        name: "LandingPage2",
        data() {
            return {
                fileString: '',
                fileObj: ''
            }
        },
        mounted() {
            let self = this;

            $("#iframewebpage").click(function () {
                $(this).replaceWith("<div class='wistia_responsive_padding col-12 d-md-block video'><div class='wistia_responsive_wrapper' style='height:100%;left:0;top:0;width:100%;'> <div class='wistia_embed wistia_async_umpfww7vro videoFoam=true' style='height:100%;position:relative;width:100%'> <div class='wistia_swatch' style='height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;'> <img src='https://fast.wistia.com/embed/medias/umpfww7vro/swatch' style='filter:blur(5px);height:100%;object-fit:contain;width:100%;' alt='' onload='this.parentNode.style.opacity=1;'/></div></div></div></div>");
                $("iframe").attr({
                    height: "500",
                    allowfullscreen: "true",
                    frameborder: "0"
                });
            });


            let s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://cdn.ywxi.net/js/1.js";
            s.async = true;
            $("body").append(s);

            // Create a Stripe client.
            var stripe = Stripe('pk_live_7HadDMWhvzW6moMjkYdjbHdA');

// Create an instance of Elements.
            var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
            var style = {
                base: {
                    color: '#32325d',
                    lineHeight: '18px',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                        color: '#aab7c4'
                    }
                },
                invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a'
                }
            };

// Create an instance of the card Element.
            var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
            card.mount('#card-element');

// Handle real-time validation errors from the card Element.
            card.addEventListener('change', function (event) {
                var displayError = document.getElementById('card-errors');
                if (event.error) {
                    displayError.textContent = event.error.message;
                } else {
                    displayError.textContent = '';
                }
            });

            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

            let date = '';
            let cookie = getCookie("landed");

            if (cookie === "") {
                date = new Date();
                date.setDate(date.getDate() + 7);
                document.cookie = "landed=" + date;
            }
            else {
                date = new Date(cookie);
                let currentDate = new Date();
                if(date < currentDate.getDate())
                    window.location = 'http://vidsuade.com/animatedlogo';
            }
            console.log(date);

            date = date.getTime();

            setInterval(function () {
                let now = new Date().getTime();

                let distance = date - now;

                $('#days').text(Math.floor(distance / (1000 * 60 * 60 * 24)));
                $('#hours').text(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                $('#minutes').text(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
                $('#seconds').text(Math.floor((distance % (1000 * 60)) / 1000));

            });

            $('#browse-files').on('change', function () {
                self.fileObj = this.files[0];
                $('.filename').text(self.fileObj.name);
            });

            $('.drag-box').on("dragover", function (e) {
                e.preventDefault();
                e.stopPropagation();
                e.dataTransfer = e.originalEvent.dataTransfer;
                e.dataTransfer.dropEffect = 'copy';
            });


            $('.drag-box').on('drop', function (e) {
                e.preventDefault();
                e.stopPropagation();
                e.dataTransfer = e.originalEvent.dataTransfer;

                if (e.dataTransfer.items) {
                    for (var i = 0; i < e.dataTransfer.items.length; i++) {

                        if (e.dataTransfer.items[i].kind === 'file') {
                            var file = e.dataTransfer.items[i].getAsFile();

                            $('.filename').text(file.name);
                            self.fileObj = file;
                            console.log(file.name);
                            self.getFileUri(file);
                            $('#browse-files').files[0] = file;
                            console.log($('#file').files);
                        }
                    }
                } else {

                    for (var i = 0; i < e.dataTransfer.files.length; i++) {
                        console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
                    }
                }
                if (e.dataTransfer.items) {
                    e.dataTransfer.items.clear();
                } else {
                    e.dataTransfer.clearData();
                }
                $(this).text('File Added Successfilly!')
            });


            var form = document.getElementById('payment-form');
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                stripe.createToken(card).then(function (result) {
                    if (result.error) {
                        // Inform the customer that there was an error.
                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                    } else {
                        // Send the token to your server.
                        stripeTokenHandler(result.token);
                    }
                });
            });

            function stripeTokenHandler(token) {
                // Insert the token ID into the form so it gets submitted to the server
                var form = document.getElementById('mc-form');

                if (self.validateForm() === 'valid')
                {
                    $('#card-errors').addClass('hidden');
                    $('.submit').attr('disabled', true).addClass('submitted');
                    $('.submit').text('Sending...');

                    // Submit the form
                    axios.post('/charge', {
                        stripeToken: token.id,
                        stripeEmail: $('#email').val(),
                        amount: '19999'
                    }).then(function (res) {
                        if (res.status === 200) {
                            //send email
                            self.upload(self.fileObj);
                            self.sendEmail($('#email').val(), self.fileObj.name);
                            $('#hub-form').submit();
                        }
                    }).catch(function (err) {
                        console.log(err.response);
                    });
                }
                else {
                    $('#card-errors').removeClass('hidden').text(self.validateForm());
                }

            }

        },
        methods: {
            browse() {
                $('#browse-files').click();
            },
            upload (file) {
                let fd = new FormData();
                fd.set('file', file);
                axios.post('/upload', fd, {
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }).then(function (res) {
                    console.log('email' + res.status);
                });
            },
            sendEmail(email, filename) {
                axios.post('/send-email', {
                    email: email,
                    filename: filename,
                    name: $('.fn').val() + ' ' + $('.ln').val(),
                    phone: $('#phone').val()
                }).then(function (res) {
                    console.log('email' + res.status);
                });
            },
            getFileUri(file) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    this.fileString = reader.result;
                }
            },
            validateForm() {
                if ($('#firstname').val() === '' || $('#lastname').val() === '' || $('#email').val() === '' || $('#phone').val() === '')
                {
                    return 'All Fields Required!';
                }
                else if ($('#email').val() !== $('#cemail').val()) {
                    return 'Your Emails must match!';
                }
                else {
                    return 'valid';
                }
            }
        }
    }
</script>

<style scoped>
    input {
        color: #7B7A7B !important;
    }

    #iframewebpage {
        background-color: #D98430;
        color: white;
        padding: 0.35rem 1.2rem;
    }

    iframe {
        width: 100%;
        max-width: 407px;
        height: 245px;
    }


    .hidden {
        display: none;
    }

    .landing {
        font-family: 'Avenir', Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .nav {
        background-color: #009EE9;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }

    .container-fluid {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }

    .logo {
        max-width: 150px;
        width: 100%;
    }

    .submitted {
        background-color: grey !important;
    }

    .submitted:hover {
        background-color: grey !important;
        cursor: not-allowed !important;
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
    }

    .hero_bg {
        background: url("../../assets/landing/Hero_Photo.png");
        background-size: cover;
        padding-left: 15%;
        padding-right: 15%;
        font-family: 'Avenir', Helvetica, sans-serif;
    }

    .header-content {
        color: #FFFFFF;
        margin-top: 50px;
        margin-bottom: 60px;
    }

    .header-content h1 {
        font-weight: 700;
        font-family: 'Avenir', Helvetica, sans-serif;
    }

    .offer_section, .special_offer_1, .limited_time, .long_text, .testimonial, .footer, .guarantee {
        padding-left: 15%;
        padding-right: 15%;
    }

    .offer_section {
        margin-top: 50px
    }

    .checkmark {
        width: 40px;
        display: block;
        float: left;
    }

    .section-heading {
        color: #7B7A7B;
        font-size: 30px;
        font-weight: 700;
    }

    .proscons {
        font-size: 20px;
    }

    .offer {
        width: 90%;
    }

    .limited_time, .testimonial {
        background-color: #009ee9;
    }

    .timer-block {
        background-color: #7FCEF3;
        width: 20%;
        float: left;
        color: #FFFFFF;
        text-align: center;
        margin-left: 15px;
        padding: 5px;
        margin-top: 20px;
        margin-bottom: 20px;
        line-height: 1;
    }

    .guarantee-title {
        font-weight: 700;
        font-size: 30px;
        color: #7B7A7B;
    }

    .guarantee-content {
        color: #7B7A7B;
    }

    .timer-title {
        color: #FFFFFF;
        font-size: 42px;
        text-align: center;
        margin-top: 20px;
    }

    .long_text {
        color: #7B7A7B;
    }

    .title {
        line-height: initial;
        text-align: center;
    }

    .sub-title {
        text-align: center;
    }

    .cta {
        background-color: #E98000;
        color: #FFFFFF;
        padding: 10px 15px;
        font-size: 26px;
        display: block;
        margin: auto;
        max-width: 400px;
        text-align: center;
    }

    .cta:hover, .submit:hover {
        -webkit-box-shadow: 2px 16px 36px -10px rgba(136, 136, 136, 1);
        -moz-box-shadow: 2px 16px 36px -10px rgba(136, 136, 136, 1);
        box-shadow: 2px 16px 36px -10px rgba(136, 136, 136, 1);
    }

    .cta:hover {
        text-decoration: none;
    }

    .testimonial {
        color: #FFFFFF;
    }

    .footer {
        background-color: #727071;
        color: #FFFFFF;
    }

    .footer-links {
        float: right;
    }

    .footer-links a {
        color: #FFFFFF;
    }

    #form {
        border: 1px solid #DEDEDE;
        border-radius: 20px;
        border-top: 3px solid #EA8F22;
        background-color: #F1F1F1;
        max-width: 400px;
        position: absolute;
        right: 20%;
        top: 27%;
        z-index: 5;
    }

    #days, #hours, #minutes, #seconds {
        font-size: 42px;
        font-weight: 500;
    }

    .drag-box {
        background-color: #FFFFFF;
        padding: 25px 40px;
        text-align: center;
        outline: 2px dashed grey;
        outline-offset: -8px;
    }

    .browse {
        background-color: #009EE9;
        color: #FFFFFF;
        padding: 5px 10px;
        text-align: center;
        font-size: 18px;
        display: inline-block;
        width: 10%;
    }

    .filename {
        background-color: #E6E7E8;
        color: #ACAEB0;
        padding: 5px 10px;
        display: inline-block;
        width: 90%;
    }

    .payment-form {
        background-color: #727071;
        color: #FFFFFF;

    }

    .total {
        font-size: 22px;
        color: #727071;
        font-weight: 700;
    }

    .submit {
        background-color: #e98000;
        display: block;
        color: #FFFFFF;
        font-size: 18px;
        margin: auto;
        max-width: 250px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .privacy {
        color: #888788;
        font-size: 12px;
        text-decoration: underline;
        margin: auto;
    }

    input {
        border: 0;
        color: #B8BABC;
    }

    .fn, .ln {
        max-width: 45% !important;
    }

    .fn {
        margin-right: 35px;
    }

    .arrow {
        position: absolute;
        width: 250px;
        left: 100%;
        top: -10%;
    }

    looping-gif img {
        max-width: 500px;
    }

    .StripeElement {
        background-color: white;
        height: 40px;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid transparent;
        box-shadow: 0 1px 3px 0 #e6ebf1;
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }

    .browse:hover, .filename:hover, .submit:hover {
        cursor: pointer;
    }

    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }

    .StripeElement--invalid {
        border-color: #fa755a;
    }

    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }

    .video {
        margin: unset !important;
        float: left;
    }

    @media screen and (max-width: 2600px) {
        #form {
            right: 28%;
        }
    }


    @media screen and (max-width: 1920px) {
        #form {
            right: 20%;
            top: 27%;
        }
    }

    @media screen and (max-width: 1540px) {
        #form {
            right: 16%;
            top: 26%;
        }
    }

    @media screen and (max-width: 1540px) {
        #form {
            right: 10%;
            top: 26%;
        }
    }

    @media screen and (max-width: 1370px) {
        #form {
            right: 5%;
            top: 33%;
        }
    }

    @media screen and (max-width: 1280px) {
        #form {
            right: 1%;
            top: 33%;
        }
    }

    @media screen and (max-width: 1220px) {
        #form {
            position: initial;
            float: left;
            margin-top: 50px;
        }

        .video {
            margin: auto !important;
            float: none;
        }

        .header-content {
            margin-bottom: 10px;
            text-align: center;
        }

        .procon-text {
            max-width: 80%;
            font-size: 14px !important;
        }

        .procon-text span {
            font-size: 18px !important;
        }

        .offer_section {
            margin-top: 50px;
        }

        .arrow {
            display: none;
        }

        .special_offer_1 {
            float: right;
        }

        .what_you_get {
            margin-top: 50px;
            padding-left: 50px;
        }

        .looping-gif img {
            display: block;
            margin: auto;
            max-width: 500px;
        }
    }

    @media screen and (max-width: 1160px) {
        .offer_section, .special_offer_1, .limited_time, .long_text, .testimonial, .footer, .guarantee {
            padding-left: 10%;
            padding-right: 10%;
        }
    }

    @media screen and (max-width: 1040px) {

        .offer_section {
            margin-top: 50px;
        }

        .special_offer {
            float: right;
        }

        .what_you_get {
            margin-top: 50px;
            padding-left: 50px;
        }

        .offer {
            display: block;
            margin: auto;
            float: none;
        }

        .checkmark {
            width: 30px;
        }
    }

    @media screen and (max-width: 985px) {
        .fn, .ln {
            max-width: 100% !important;
        }

        .fn {
            margin-right: 0;
            margin-bottom: 10px;
        }

        .filename {
            font-size: 17.5px;
        }
    }

    @media screen and (max-width: 985px) {
        #form {
            float: none;
            margin: auto;
            margin-top: 50px;
        }

        .footer p, .f-link {
            font-size: 12px;
            text-align: center;
        }

        .timer-title {
            text-align: center;
            display: block;
            margin: auto;
        }
    }

    @media screen and (max-width: 500px) {
        .offer_section, .special_offer_1, .limited_time, .long_text, .testimonial, .footer, .guarantee {
            padding-left: 5%;
            padding-right: 5%;
        }

        .looping-gif img {
            display: block;
            margin: auto;
            width: 300px;
        }

        .fn, .ln {
            max-width: 100% !important;
        }

        .fn {
            margin-bottom: 10px;
        }

        .filename {
            font-size: 17.5px;
        }

        .footer {
            padding-bottom: 10px;
        }

        .footer p, .footer-links {
            display: block;
            float: none;
            margin: auto;
            text-align: center;
        }

        .footer-links {
            margin-top: 5px;
        }

        .timer-title {
            font-size: 28px;
            text-align: center;
            display: block;
            margin: auto;
        }

        .timer-block #days, .timer-block #hours, .timer-block #minutes, .timer-block #seconds {
            font-size: 22px;
        }

        .timer-block #days + div, .timer-block #hours + div, .timer-block #minutes + div, .timer-block #seconds + div {
            font-size: 15px;
        }
    }

</style>
