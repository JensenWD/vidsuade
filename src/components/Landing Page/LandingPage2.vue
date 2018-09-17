<template>
    <div class="landing">
        <div class="row hero_bg pb-5 pt-5">
            <div class="col-lg-6 col-md-12 header-content">
                <h1 class="title">Animate your logo for only 49.95!</h1>
                <p class="sub-title">spice up your promotional videos by using an animated version on your logo</p>
            </div>
        </div>
        <div class="row offer_section">

            <div class="col-12">
                <button class="btn d-block d-md-none m-auto" type="button" id="iframewebpage"
                        data-src="https://www.youtube.com/embed/FjA0j_zmfRw?rel=0&amp;showinfo=0">Watch Video
                </button>
            </div>

            <iframe class="col-8 d-none d-md-block video" width="560" height="415"
                    src="https://www.youtube.com/embed/FjA0j_zmfRw?rel=0&amp;showinfo=0"
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

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
                        <input class="col-12" type="email" placeholder="Confirm Email" style="width: 100%;">
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

                    <button class="submit pt-1 pb-1 text-center mt-4">Submit Payment</button>
                </form>
                <router-link class="privacy text-center mt-1 mb-2" to="/privacy-policy">Privacy Policy</router-link>
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

        <!--<div class="row special_offer_1 mt-5">-->
            <!--<div class="col-xl-6 col-lg-12">-->
                <!--<span class="section-heading mb-4" style="display: block;">Special Offer</span>-->
                <!--<img class="offer" src="../../assets/landing/Offer.png" alt="">-->
                <!--<img class="arrow" src="../../assets/landing/Arrow.png" alt="">-->
                <!--<p class="mt-5 mb-5">-->
                    <!--Getting your logo animated is normally valued over-->
                    <!--<strong>$200</strong>, but with this limited-time offer you can have-->
                    <!--your logo animated for only <strong>$49.95!</strong> That’s 75% off the-->
                    <!--estimated value! But act fast because <strong>this offer will-->
                    <!--expire in less than 7 days.</strong>-->
                <!--</p>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="row limited_time">-->
            <!--<div class="col-lg-6 col-md-12">-->
                <!--<div class="timer-title">Limited-time offer!</div>-->
            <!--</div>-->
            <!--<div class="col-lg-6 col-md-12">-->
                <!--<div class="timer-block">-->
                    <!--<div id="days">06</div>-->
                    <!--<div>Days</div>-->
                <!--</div>-->
                <!--<div class="timer-block">-->
                    <!--<div id="hours">06</div>-->
                    <!--<div>Hours</div>-->
                <!--</div>-->
                <!--<div class="timer-block">-->
                    <!--<div id="minutes">06</div>-->
                    <!--<div>Minutes</div>-->
                <!--</div>-->
                <!--<div class="timer-block">-->
                    <!--<div id="seconds">06</div>-->
                    <!--<div>Seconds</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <div class="row long_text mt-5">
            <div class="col-12 section-heading">
                Why companies need<br>animated logos
            </div>
        </div>
        <div class="row long_text mt-5">
            <div class="col-12">
                <p>
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
                    <div style="">
                        <iframe src="https://giphy.com/embed/9ryMxorWGBVAdmOrF3" width="100%" height="100%"
                                frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    </div>
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
                </p>
            </div>
        </div>
        <div class="row long_text mt-1">
            <div class="col-xl-6 col-lg-12 looping-gif">
                <div style="">
                    <iframe src="https://giphy.com/embed/5towk7UXRZh4p1LqqI" width="100%" height="100%"
                            style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
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
    let stripe = Stripe(`pk_test_EODlIgrDsj9wOZ3UfKK4RgKP`),
        elements = stripe.elements(),
        card = undefined;
    import axios from 'axios';

    export default {
        name: "LandingPage2",
        data() {
            return {
                fileString: ''
            }
        },
        mounted() {
            let self = this;

            $("#iframewebpage").click(function () {
                $(this).replaceWith("<iframe class='col-12 d-block d-md-none' src=" + $(this).data('src') + "></iframe>");
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
            var stripe = Stripe('pk_test_EODlIgrDsj9wOZ3UfKK4RgKP');

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
                            console.log('... file[' + i + '].name = ' + file.name);
                            $('.filename').text(file.name);
                            self.getFileUri(file);
                            $('#file').files = file;
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
                    axios.post('/charge-sale', {
                        stripeToken: token.id,
                        stripeEmail: $('#email').val(),
                    }).then(function (res) {
                        if (res.status === 200) {
                            //send email
                            self.sendEmail('sergio.roman45@gmail.com', self.fileString);
                            $('#hub-form').submit();
                        }
                    }).catch(function (err) {
                        console.log(err);
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
            sendEmail(email, file) {
                axios.post('/send-email', {
                    email: email,
                    file: file
                }).then(function (res) {
                    console.log(res);
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
        max-width: 500px;
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
        margin-top: 255px
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
        top: 23%;
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
        display: block;
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
        position: absolute;
        top: 29%;
        width: 600px;
        height: 321px;
    }

    @media screen and (max-width: 1540px) {
        #form {
            right: 16%;
            top: 26%;
        }

        .video {
            position: absolute;
            top: 35%;
            width: 500px;
            height: 265px;
        }
    }

    @media screen and (max-width: 1320px) {
        #form {
            right: 10%;
            top: 33%;
        }

        .video {
            top: 40%;
        }
    }

    @media screen and (max-width: 1220px) {
        #form {
            position: initial;
            float: left;
            margin-top: 50px;
        }

        .header-content {
            margin-bottom: 10px;
        }

        .procon-text {
            max-width: 80%;
            font-size: 14px !important;
        }

        .procon-text span {
            font-size: 18px !important;
        }

        .video {
            position: initial;
            display: block;
            margin: auto;
            height: 302px;
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

        .looping-gif iframe {
            display: block;
            margin: auto;
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
