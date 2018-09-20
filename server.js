var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
const stripe = require("stripe")("sk_test_x6IdvtCY7o6gtBc3Txie41YE");

app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(serveStatic(__dirname + "/dist"));
app.use(require("body-parser").urlencoded({extended: false}));

var port = process.env.PORT || 5000;


app.post('/charge', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let amount = req.body.amount;
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    }).then(customer =>
        stripe.charges.create({
            amount,
            description: "Animate Logo",
            currency: "usd",
            customer: customer.id
        }));
    res.send('200');
});


app.post('/send-email', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    let nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sergio.roman45@gmail.com',
            pass: 'Qpwoeir9'
        }
    });

    let message = {
        from: 'sergio.roman45@gmail.com',
        to: 'sergio.roman45@gmail.com',
        subject: 'Test',
        hmtl: '<p>Testing email</p>',
        attachments: [
            {
                filename: 'image.png',
                path: req.body.file
            }
        ]
    };

    transporter.sendMail(message, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });

});

app.listen(port);
