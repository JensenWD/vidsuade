var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const stripe = require("stripe")("sk_test_x6IdvtCY7o6gtBc3Txie41YE");

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(require("body-parser").urlencoded({extended: false}));

var port = process.env.PORT || 5000;

app.post('/charge', function (req, res) {
  let amount = 4999;

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

app.listen(port);
