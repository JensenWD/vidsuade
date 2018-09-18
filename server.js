var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
const stripe = require("stripe")("sk_test_x6IdvtCY7o6gtBc3Txie41YE");

app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(serveStatic(__dirname + "/dist"));
app.use(require("body-parser").urlencoded({extended: false}));

var port = process.env.PORT || 5000;

app.post('/charge-sale', function (req, res) {
    let amount = 4999;
    res.setHeader('Content-Type', 'application/json');

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    }).then(customer =>
        stripe.charges.create({
            amount,
            description: "Animate logo",
            currency: "usd",
            customer: customer.id
        }))
        .then(charge => res.redirect("/#/landing"));
});

app.post('/charge', function (req, res) {
    let amount = 20000;
    res.setHeader('Content-Type', 'application/json');

    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    }).then(customer =>
        stripe.charges.create({
            amount,
            description: "Animate Logo - Sale",
            currency: "usd",
            customer: customer.id
        }))
        .then(charge => res.redirect("/#/landing"));
});


app.post('/send-email', function (req, res) {
    let sendmail = require('sendmail')();

    res.setHeader('Content-Type', 'application/json');

    sendmail({
        from: req.body.email,
        to: req.body.email,
        subject: 'test',
        html: 'Test Email',
        attachments: [
            {
                path: req.body.file
            }
        ]
    }, function (err, reply) {
        res.send(err);
    });
});

app.listen(port);
