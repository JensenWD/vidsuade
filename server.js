var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var stripe = require("stripe")("sk_test_x6IdvtCY7o6gtBc3Txie41YE");

app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);


app.post('/process-payment', function (req, res) {
    const token = req.data.stripeToken; // Using Express

    const charge = stripe.charges.create({
        amount: 49.95,
        currency: 'usd',
        description: 'Animated Logo - Promotion',
        source: token,
    });
});
