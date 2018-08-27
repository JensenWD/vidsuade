<template>
    <div class="landing">
        <div class="nav navbar">
            <img src="../../assets/home/Logo_NavBar.png" class="img-fluid logo" alt="logo">
            <span></span>
        </div>
        <div class="row hero_bg pb-5 pt-5">
            <div class="col-6 mb-5 mt-4 header-content">
                <h1>Animate your logo<br>for only 49.95!</h1>
                <p>spice up your promotional videos by using<br>an animated version on your logo</p>
            </div>
        </div>
        <div class="row offer_section">
            <div id="form" class="col-6">
                <p class="mt-3" style="font-size: 22px">Get your logo animated!</p>
                <p><strong>Where should we send yur animation?*</strong></p>
                <div class="row ml-1 mr-1 mb-2 mt-2">
                    <input class="col-6 fn mr-1" type="text" placeholder="First Name">
                    <input class="col-6 ln ml-1" type="text" placeholder="Last Name">
                </div>
                <div class="row ml-1 mr-1 mb-2 mt-2">
                    <input class="col-12" type="email" placeholder="Email" style="width: 100%;">
                </div>
                <div class="row ml-1 mr-1 mb-2 mt-2">
                    <input class="col-12" type="email" placeholder="Confirm Email" style="width: 100%;">
                </div>
                <div class="row ml-1 mr-1 mb-2 mt-2">
                    <input class="col-12" type="text" placeholder="Phone Number" style="width: 100%;">
                </div>
                <p><strong style="font-size: 14px;">Upload your logo* </strong>
                    <span style="font-size: 10px;">(Vector file preferred - 25mb max file size)
                    </span>
                </p>
                <div class="drag-box">
                    Drop your files here
                </div>
                <span class="browse">+</span><span class="filename">Click to choose a file instead</span>
                <p class="mt-3">Submit payment</p>
                <div class="payment-form pl-3 pt-1 pb-1 mb-3">Click here for payment options</div>
                <div id="card-element"></div>
                <div class="total text-center">Total: $49.95</div>
                <div class="submit pt-1 pb-1 text-center mt-2">Animate my logo</div>
                <router-link class="privacy text-center mt-1 mb-2" to="/privacy-policy">Privacy Policy</router-link>
            </div>
            <div class="col-6">
                <span class="section-heading mb-4" style="display: block;">What you'll get</span>
                <div class="row mt-3">
                    <div class="col-1 pr-3">
                        <img class="checkmark" src="../../assets/landing/Check_Mark.png" alt="">
                    </div>
                    <div class="col-11 pl-4">
                        <span class="proscons">Up to a 5-second full HD 1080p 2D animation of your logo in .mov and .mp4 formats</span>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-1 pr-3">
                        <img class="checkmark" src="../../assets/landing/Check_Mark.png" alt="">
                    </div>
                    <div class="col-11 pl-4">
                        <span class="proscons">Fully animated logo with sound effects/music</span>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-1 pr-3">
                        <img class="checkmark" src="../../assets/landing/Check_Mark.png" alt="">
                    </div>
                    <div class="col-11 pl-4">
                        <span class="proscons">Quick turn-around (3-5 business days)</span>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-1 pr-3">
                        <img class="checkmark" src="../../assets/landing/X_Icon.png" alt="">
                    </div>
                    <div class="col-11 pl-4">
                        <span class="proscons">A video you won’t be proud of</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row special_offer mt-5">
            <div class="col-6">
                <span class="section-heading mb-4" style="display: block;">Special Offer</span>
                <img class="offer" src="../../assets/landing/Offer.png" alt="">
                <img class="arrow" src="../../assets/landing/Arrow.png" alt="">
                <p class="mt-5 mb-5">
                    Getting your logo animated is normally valued over
                    <strong>$200</strong>, but with this limited-time offer you can have
                    your logo animated for only <strong>$49.95!</strong> That’s 75% off the
                    estimated value! But act fast because <strong>this offer will
                    expire in less than 7 days.</strong>
                </p>
            </div>
        </div>
        <div class="row limited_time">
            <div class="col-6">
                <span class="timer-title">Limited-time offer!</span>
            </div>
            <div class="col-6">
                <div class="timer-block">
                    <div id="days">06</div>
                    <div>Days</div>
                </div>
                <div class="timer-block">
                    <div id="hours">06</div>
                    <div>Hours</div>
                </div>
                <div class="timer-block">
                    <div id="minutes">06</div>
                    <div>Minutes</div>
                </div>
                <div class="timer-block">
                    <div id="seconds">06</div>
                    <div>Seconds</div>
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
        <div class="row long_text mt-5">
            <div class="col-4 looping-gif">
                <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
                    <iframe src="https://giphy.com/embed/5towk7UXRZh4p1LqqI" width="100%" height="100%"
                            style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
            </div>
        </div>
        <div class="row long_text mt-5">
            <div class="col-12 section-heading">
                Where to use you<br>animated logo
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
        <div class="row long_text mt-5 mb-5">
            <div class="col-12">
                <a href="#form" class="cta">Animate my logo</a>
            </div>
        </div>
        <div class="row testimonial text-center pt-5">
            <div class="col-12">
                <p>“Vidsuade’s talent extends far beyond creating unique designs and animations.
                    Their consultative approach to truly understand our brand has instilled trust
                    in my agency to keep coming back for more! I highly recommend Vidsuade.”</p>
                <br>
                <p>- Garrett Seiger<br>
                President of Pirate Labs</p>
            </div>
        </div>
        <div class="row footer pt-3">
            <div class="col-6">
                <p>
                    © Copyright 2018 Vidsuade - All Rights Reserved.
                </p>
            </div>
            <div class="col-6">
                <div class="footer-links">
                    <router-link class="mr-sm-2 ml-sm-2" to="/about-us">About Us</router-link>|
                    <router-link class="mr-sm-2 ml-sm-2" to="/privacy-policy">Privacy Policy</router-link>|
                    <router-link class="ml-sm-2" to="/contact-us">Contact Us</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let stripe = Stripe(`YOUR_STRIPE_PUBLISHABLE_KEY`),
        elements = stripe.elements(),
        card = undefined;

    export default {
        name: "LandingPage",
        data() {
            return {}
        },
        mounted() {
            //hide nav && footer from landing page
            let url = window.location.toString();
            let style = {
                base: {
                    border: '',
                    color: '#FFFFFF'
                }
            };
            card = elements.create('card', style);
            card.mount('#card-element');

            if (url.includes('landing')) {
                $('nav').css({'display': 'none'});
                $('.footer_bg').css({'display': 'none'});
            }

            let date = new Date();
            date.setDate(date.getDate() + 7);
            date = date.getTime();

            setInterval(function () {
                let now = new Date().getTime();

                let distance = date - now;

                // Time calculations for days, hours, minutes and seconds
                $('#days').text(Math.floor(distance / (1000 * 60 * 60 * 24)));
                $('#hours').text(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                $('#minutes').text(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
                $('#seconds').text(Math.floor((distance % (1000 * 60)) / 1000));

            });

            $('.drag-box').on('dragover', function () {
                $(this).text('dragging over!')
            })
        },
        methods: {}
    }
</script>

<style scoped>
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

    .hero_bg {
        background: url("../../assets/landing/Hero_Photo.png");
        background-size: cover;
        padding-left: 15%;
        padding-right: 15%;
        font-family: 'Avenir', Helvetica, sans-serif;
    }

    .header-content {
        color: #FFFFFF;
    }

    .header-content h1 {
        font-weight: 700;
        font-family: 'Avenir', Helvetica, sans-serif;
    }

    .offer_section, .special_offer, .limited_time, .long_text, .testimonial, .footer {
        padding-left: 15%;
        padding-right: 15%;
    }
    .offer_section {
        margin-top: 200px
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

    .timer-title {
        color: #FFFFFF;
        font-size: 42px;
        text-align: center;
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
        border-radius: 5px;
        border-top: 3px solid #EA8F22;
        background-color: #F1F1F1;
        max-width: 400px;
        position: absolute;
        right: 20%;
        top: 20%;
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
        font-size: 20px;
    }
    .filename {
        background-color: #E6E7E8;
        color: #ACAEB0;
        padding: 5px 10px;
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
        color: #FFFFFF;
        font-size: 18px;
        margin: auto;
        max-width: 250px;
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
        max-width: 48.7%;
    }
    .arrow {
        position: absolute;
        width: 250px;
        left: 100%;
        top: -10%;
    }
</style>
